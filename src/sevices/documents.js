import { validateAll } from "indicative";
import Api from "../sevices/global";

export default class DocumentsService {
  async getDocumments() {
    const response = await Api.get(`profile/documents`);
    return response.data;
  }

  сreateDocument = async data => {
    try {
      const rules = {
        title: "required",
        file: "required"
      };

      const messages = {
        required: "The {{field}} is required"
      };

      await validateAll(data, rules, messages);

      const response = await Api.post(`profile/documents/add`, {
        document: { title: data.title, file: data.file }
      });

      return response.data;
    } catch (errors) {
      if (errors.response) {
        return Promise.reject(errors.response.data);
      }
      return Promise.reject(errors);
    }
  };
}
