import ItemModelGenerated from "./generated/ItemModelGenerated";

const customModel = {
  
  /**
   * Customize here your schema with custom attributes
   * 
   * EXAMPLE:
    
    init() {
      let schema = ItemModelGenerated.init();
  
      schema.add({
        extraCustomField: Object
      });
    },
     
   */


  /**
   * Override here your custom queries
   * EXAMPLE:
   *
   
    async get(id) {
      console.log("This is my custom query");
      return await ItemModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...ItemModelGenerated,
  ...customModel
};
