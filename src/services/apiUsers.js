import supabase from "./supabase"

export async function getUsers() {
    let { data, error } = await supabase
        .from('users')
        .select('*')

    if (error) {
        throw new Error('users could not be loaded')
        console.error(error)
    }
    return data
}

export async function createUser(name, lastName, password, email) {
    try {
        const { data, error } = await supabase.from('users').insert([{ name, lastName, password, email },]).select()
        if (error) {
            console.error('Error inserting data:', error);
            return null;
        }
        return data
    } catch (err) {
        console.log(err);
    }
}

export async function getUser(email) {
    try {
        let { data: emailArray, error } = await supabase.from('users').select('email')
        if (error) throw new Error(error)
         const isExist = emailArray.some(el => el.email === email)
          return isExist

    } catch (err) {
        console.log(err);
    }
}

