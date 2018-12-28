// The following is a sample implementation of a backend service using Parse (https://parseplatform.org).
// Feel free to swap in your own service / APIs / etc here for your own apps.

import { Injectable } from "@angular/core";
import * as Parse from 'parse/react-native';
import { User } from "./user.model";

@Injectable()
export class UserService {
    register(user: User) {
        let u:any = new Parse.User();
        u.set("email", user.email);
        u.set("password", user.password);
        return u.signUp().catch(this.handleErrors);
    }

    login(user: User) {
        return Parse.User.logIn(user.email, user.password)
            .catch(this.handleErrors);
    }

    logout() {
        return Parse.User.logOut()
            .catch(this.handleErrors);
    }

    resetPassword(email) {
        return Parse.User.requestPasswordReset(email)
            .catch(this.handleErrors);
    }

    handleErrors(error: any) {
        console.error(error.message);
        return Promise.reject(error.message);
    }
}
