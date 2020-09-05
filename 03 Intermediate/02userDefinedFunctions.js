/*
 Define a function that can answer the role of a user.
 A user can be on following roles:
 admin - with all access
 subadmin - with access to create/delete courses
 testprep - with access to create/delete tests
 user - consume all content
 other - trail user.

 Input: getUserRole(name, role)
 */

 var getUserRole = function (name, role){

    switch (role) {
        case "admin":
            return `${name} is admin with all access`;
            break;    // this is NOT necessary
        case "subadmin":
            return `${name} is sub-admin with access to create and delete courses`;
            break;    
        case "testprep":
            return `${name} is test prep with access to create/delete tests`;
            break;
        case "user":
            return `${name} is user to consume content`;
            break;
        default:
            return `${name} is a trail user`;

            break;
    }
 }

 console.log(getUserRole("Shivaraj", "testprep"));

 var getRole = getUserRole("sammy", "user");

 console.log(getRole);