export class User{
     name : string;
     email : string;
     password : string;
     img !: string;
     gender : string;
     dateOfBirth : string;
    
    constructor(name : string, email : string, password : string, gender : string, dateOfBirth : string){
        this.name = name;
        this.email = email;
        this.password = password;
        this.gender = gender;
        this.dateOfBirth = dateOfBirth;
        this.setImg();
    }
    getName(): string {
        return this.name;
    }
    setName(name: string) {
        this.name = name;
    }
    getEmail(): string {
        return this.email;
    }
    setEmail(email: string) {
        this.email = email;
    }
    getPassword(): string {
        return this.password;
    }
    setPassword(password: string) {
        this.password = password;
    }
    getImg() :string {
        return this.img;
    }
    setImg() {
        if(this.gender=="Male"||this.gender=="male") this.img = "/assets/img/ManAvatar.png";
        else this.img = "/assets/img/WomanAvatar.png";
    }
    getGender(): string {
        return this.gender;
    }
    setGender(gender: string) {
        this.gender = gender;
        this.setImg();
    }
    getDateOfBirth(): string {
        return this.dateOfBirth;
    }
    setDateOfBirth(dateOfBirth : string) {
        this.dateOfBirth = dateOfBirth;
    }
    toString(): string {
        return ", name: " + this.name + 
               ", email: " + this.email + 
               ", password: " + this.password + 
               ", img: " + this.img + 
               ", gender: " + this.gender +
               ", dateOfBirth: " + this.dateOfBirth
    }

}