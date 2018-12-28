"use strict";
// The following is a sample implementation of a backend service using Parse (https://parseplatform.org).
// Feel free to swap in your own service / APIs / etc here for your own apps.
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Parse = require("parse/react-native");
var UserService = /** @class */ (function () {
    function UserService() {
    }
    UserService.prototype.register = function (user) {
        var u = new Parse.User();
        u.set("email", user.email);
        u.set("password", user.password);
        return u.signUp().catch(this.handleErrors);
    };
    UserService.prototype.login = function (user) {
        return Parse.User.logIn(user.email, user.password)
            .catch(this.handleErrors);
    };
    UserService.prototype.logout = function () {
        return Parse.User.logOut()
            .catch(this.handleErrors);
    };
    UserService.prototype.resetPassword = function (email) {
        return Parse.User.requestPasswordReset(email)
            .catch(this.handleErrors);
    };
    UserService.prototype.handleErrors = function (error) {
        console.error(error.message);
        return Promise.reject(error.message);
    };
    UserService = __decorate([
        core_1.Injectable()
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidXNlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSx5R0FBeUc7QUFDekcsNkVBQTZFOztBQUU3RSxzQ0FBMkM7QUFDM0MsMENBQTRDO0FBSTVDO0lBQUE7SUEyQkEsQ0FBQztJQTFCRyw4QkFBUSxHQUFSLFVBQVMsSUFBVTtRQUNmLElBQUksQ0FBQyxHQUFPLElBQUksS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQzdCLENBQUMsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMzQixDQUFDLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDakMsT0FBTyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRUQsMkJBQUssR0FBTCxVQUFNLElBQVU7UUFDWixPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQzthQUM3QyxLQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFFRCw0QkFBTSxHQUFOO1FBQ0ksT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTthQUNyQixLQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFFRCxtQ0FBYSxHQUFiLFVBQWMsS0FBSztRQUNmLE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxLQUFLLENBQUM7YUFDeEMsS0FBSyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRUQsa0NBQVksR0FBWixVQUFhLEtBQVU7UUFDbkIsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDN0IsT0FBTyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBMUJRLFdBQVc7UUFEdkIsaUJBQVUsRUFBRTtPQUNBLFdBQVcsQ0EyQnZCO0lBQUQsa0JBQUM7Q0FBQSxBQTNCRCxJQTJCQztBQTNCWSxrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSBmb2xsb3dpbmcgaXMgYSBzYW1wbGUgaW1wbGVtZW50YXRpb24gb2YgYSBiYWNrZW5kIHNlcnZpY2UgdXNpbmcgUGFyc2UgKGh0dHBzOi8vcGFyc2VwbGF0Zm9ybS5vcmcpLlxuLy8gRmVlbCBmcmVlIHRvIHN3YXAgaW4geW91ciBvd24gc2VydmljZSAvIEFQSXMgLyBldGMgaGVyZSBmb3IgeW91ciBvd24gYXBwcy5cblxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgKiBhcyBQYXJzZSBmcm9tICdwYXJzZS9yZWFjdC1uYXRpdmUnO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuL3VzZXIubW9kZWxcIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFVzZXJTZXJ2aWNlIHtcbiAgICByZWdpc3Rlcih1c2VyOiBVc2VyKSB7XG4gICAgICAgIGxldCB1OmFueSA9IG5ldyBQYXJzZS5Vc2VyKCk7XG4gICAgICAgIHUuc2V0KFwiZW1haWxcIiwgdXNlci5lbWFpbCk7XG4gICAgICAgIHUuc2V0KFwicGFzc3dvcmRcIiwgdXNlci5wYXNzd29yZCk7XG4gICAgICAgIHJldHVybiB1LnNpZ25VcCgpLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3JzKTtcbiAgICB9XG5cbiAgICBsb2dpbih1c2VyOiBVc2VyKSB7XG4gICAgICAgIHJldHVybiBQYXJzZS5Vc2VyLmxvZ0luKHVzZXIuZW1haWwsIHVzZXIucGFzc3dvcmQpXG4gICAgICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcnMpO1xuICAgIH1cblxuICAgIGxvZ291dCgpIHtcbiAgICAgICAgcmV0dXJuIFBhcnNlLlVzZXIubG9nT3V0KClcbiAgICAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9ycyk7XG4gICAgfVxuXG4gICAgcmVzZXRQYXNzd29yZChlbWFpbCkge1xuICAgICAgICByZXR1cm4gUGFyc2UuVXNlci5yZXF1ZXN0UGFzc3dvcmRSZXNldChlbWFpbClcbiAgICAgICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9ycyk7XG4gICAgfVxuXG4gICAgaGFuZGxlRXJyb3JzKGVycm9yOiBhbnkpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvci5tZXNzYWdlKTtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yLm1lc3NhZ2UpO1xuICAgIH1cbn1cbiJdfQ==