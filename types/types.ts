export type Animal = {
    name: String;
    type: String;
    sex: String;
    photo?: String;
    age: Number;
    vaccination?: String[] | Boolean;
    nature: String;
    description?: String; 
};

export type UserInfo = {
    _id: String;
    firstName: String;
    lastName: String;
    email: URL;
    phone: String;
    photo?: String;
    valunteer: Boolean;
    animals?: Animal[];
    age: Number;
    sex: String;
};
