import { Model, RelationMappings, JSONSchema} from "objection";
import Brand from "./Brand";

class Location extends Model {
    static get tableName(): string {
        return "locations";
    }

    static get idColumn(): string {
        return 'id';
    }

    static get jsonSchema(): JSONSchema{
        return{
            type: 'object',
            properties:{
                id: { type: 'integer' },
                name: { type: 'string' },
                type: { type: 'string' },
                assessments: { type: 'integer' },
                is_open: { type: 'boolean' },
                image: { type: 'string' },
                city: { type: 'string' },
                state: { type: 'string' },
                brands:{
                    type: 'array',
                    items:{
                        type: 'object',
                        properties:{
                            name: { type: 'string' },
                            image: { type: 'string' },
                        }
                    }
                }
            }
        }
    }

    static get virtualAttributes() {
        return ['brandsArray'];
    }

    static get relationMappings():RelationMappings{
        return {
            brands: {
                relation: Model.ManyToManyRelation,
                modelClass: Brand,
                join: {
                    from: "locations.id",
                    through: {
                        from: "locations_brands.id_location",
                        to: "locations_brands.id_brand",
                    },
                    to: "brands.id",
                },
            },
        };
    }
}

export default Location;
