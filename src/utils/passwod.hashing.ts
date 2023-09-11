import bcrypt from 'bcrypt';


export const generatePasswordHash = async(password: string) => {

    try {
        const plainPassword = password;
        const hashedPassword = await bcrypt.hash(plainPassword, 5);
        return hashedPassword;
    } catch (error) {
        console.log("Error in generating hash", error);
    }

}



export const checkPassword = async(dbPassword: string, userPassword: string) => {

    try {
        let results = await bcrypt.compare( dbPassword,userPassword);
        console.log(results)
        return results
    } catch (error) {
        console.error('There is error in matching password', error);
    }

}

