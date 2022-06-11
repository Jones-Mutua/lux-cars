// export default function getCurrentUser() {
//     const user = JSON.parse(localStorage.getItem('user'));


    

//     if (user) {
//         return user;
//     }else {
//         return null;
//     }
// }


// interface IUser {
//     username: string;
//     password: string; // please don't do this in real code
//  }
 
//  function newCurrentUser(user: IUser): void {
//     localStorage.setItem('currentUser', JSON.stringify(user));
//  }
 
 export default function getCurrentUser() {
    const user = localStorage.getItem('user');

    if (user) {
        return JSON.parse(user);
    } else {
        return null
    }
    // try {
    //    return JSON.parse(userStr);
    // } catch (ex) {
    //    return null; // or do some other error handling
    // }
 }