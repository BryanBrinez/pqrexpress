import { Schema, model, models } from "mongoose";

const PQRSchema = new Schema(
  {
    radicado: {
      type: Number,
      required: [true, "Radicado incorrecto"],
      
    },

    
    fullname: {
      type: String,
      required: [true, "Nombre y apellido requerido"],
      
    },

    email: {
      type: String,
      required: [true, "Email is required"],
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Email is invalid",
      ],
    },

    number: {
      type: String,

      
    },
    departament: {
      type: String,
      required: [true, "El departamento es requerido"],
      
    },
    city: {
      type: String,
      required: [true, "La ciudad es requerida"],
      
    },
    subject: {
      type: String,
      required: [true, "El asunto es requerido"],
      minLength: [5, "El asunto tiene que ser mayor a 5 caracteres"],
     
    },
    description: {
      type: String,
      required: [true, "La descripcion del PQR es requerida"],
      minLength: [5, "El asunto tiene que ser mayor a 5 caracteres"],
      
    },
    response: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const PQR = models.PQR || model("PQR", PQRSchema);
export default PQR;
