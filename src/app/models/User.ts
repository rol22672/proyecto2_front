export class User{
    constructor(
        public userid:Number,
        public nombre:String,
        public apellido:String,
        public telefono:String,
        public email:String,
        public password:String,
        public password_confirmation:String,
        public rolid:String,
        public created_at,
        public updated_at,
    ){}
}