import { Request, Response } from "express";
import knex from "../database/connection"

class LocationController {

  async index(request: Request, response: Response) {
    
    // retorna todos os bares e suas respectivas cervejas
    const locations = await knex("locations")
    .join("locations_brands", "locations.id", "=", "locations_brands.id_location")
    .join("brands", "locations_brands.id_brand", "=" , "brands.id")
    .select("locations.id","locations.name", "locations.type","locations.assessments", "locations.is_open", "locations.image", "locations.city", "locations.state", "brands.name as name_brand", "brands.image as image_brand");

    let idAux = 0, locationIndex= 0;

    let seralizedLocations:any = [];
    
    //serializa o array 
    locations.map((location) =>{
        
        // se for um id diferente, então temos um novo location
        if(idAux !== location.id){
            idAux = location.id;

            seralizedLocations.push({
                ...location,
                image: `http://192.168.0.107:3333/uploads/locations/${location.image}`,  
                brands:[{ 
                    name: location.name_brand, 
                    image: `http://192.168.0.107:3333/uploads/brands/${location.image_brand}`
                }]
            });
            
            locationIndex++;

            //deleta campos do objeto, pois eles foram movidos para dentro de brands
            delete seralizedLocations[locationIndex - 1].name_brand;
            delete seralizedLocations[locationIndex - 1].image_brand;

        }else{ // senão apenas adicionamos a marca dentro do bar atual
            seralizedLocations[locationIndex - 1].brands.push({ 
                name: location.name_brand, 
                image: `http://192.168.0.107:3333/uploads/brands/${location.image_brand}`
            })
        }
    })

    return response.json(seralizedLocations);
  }

  generateCode(request: Request, response: Response) {

    // recebe id do location que está logado
    const idLocation = '5L';

    // para não termos código repetido
    const timestamp = Date.now();

    // quantidade de pontos sempre em 8 caracteres
    const points = 'P500';

    // concatenando código

    const code = idLocation + timestamp + points;

    // exemplo código: 5L1593647177P500

    /*  
    os primeiros números até a letra L indetifica o id do lugar (então podemos ter um id com N digitos e não teremos problemas), 
    o timestamp é gerado apenas para não ter repetição de código,
    a partir da letra P identifica a quantidade de pontos, que no nosso exemplo é 500
    */

    return response.json(code);
  }

  async checkin(request: Request, response: Response) {

    const { id_user , code } = request.body;

    const [ { datetime } ]:any = await knex("users_checkin").select('users_checkin.datetime').where("id_user", "=", id_user).orderBy('id','desc').limit(1);

    // retorna quantas horas foi feito o último checkin
    const tempoUltimoCheckin = (Date.now() - datetime) / 3600000;

    if(tempoUltimoCheckin >= 12){

        // retorno até a letra 'L'
        const id_location = code.substring(0, code.indexOf('L'));
    
        // retorno o que tem depois da letra 'P'
        const points = code.substring(code.indexOf('P') + 1);
    
        const checkin = {
            id_user,
            id_location,
            points,
            datetime: new Date()
        }

        const ultimoId = await knex("users_checkin").insert(checkin);

        return response.json({
            validado: true,
            points
        });

    }else{
        return response.status(403).json({
            message: "Checkin já realizado em menos de 12 horas",
            tempoUltimoCheckin
        });
    }

  }
}

export default LocationController;