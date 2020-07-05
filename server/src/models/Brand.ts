import { Model, RelationMappings } from "objection";

class Brand extends Model {
  static get tableName() {
    return "brands";
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

export default Brand;
