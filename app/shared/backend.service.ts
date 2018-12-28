// The following is a sample implementation of a backend service using Parse (https://parseplatform.org).
// Feel free to swap in your own service / APIs / etc here for your own apps.

import { Injectable } from "@angular/core";
import * as Parse from 'parse/react-native';

Parse.initialize("123", "xxx");
Parse.serverURL = 'http://bcd24438.ngrok.io/parse'

export class BackendService {
    static isUserLoggedIn() {
        return !!Parse.User.current();
    }
}