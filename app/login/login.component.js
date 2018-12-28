"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var dialogs_1 = require("tns-core-modules/ui/dialogs");
var page_1 = require("tns-core-modules/ui/page");
var router_1 = require("nativescript-angular/router");
var user_model_1 = require("../shared/user.model");
var user_service_1 = require("../shared/user.service");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(page, userService, routerExtensions) {
        this.page = page;
        this.userService = userService;
        this.routerExtensions = routerExtensions;
        this.isLoggingIn = true;
        this.processing = false;
        this.page.actionBarHidden = true;
        this.user = new user_model_1.User();
        this.user.email = "user@nativescript.org";
        this.user.password = "password";
    }
    LoginComponent.prototype.toggleForm = function () {
        this.isLoggingIn = !this.isLoggingIn;
    };
    LoginComponent.prototype.submit = function () {
        if (!this.user.email || !this.user.password) {
            this.alert("Please provide both an email address and password.");
            return;
        }
        this.processing = true;
        if (this.isLoggingIn) {
            this.login();
        }
        else {
            this.register();
        }
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.userService.login(this.user)
            .then(function () {
            _this.processing = false;
            _this.routerExtensions.navigate(["/home"], { clearHistory: true });
        })
            .catch(function () {
            _this.processing = false;
            _this.alert("Unfortunately we could not find your account.");
        });
    };
    LoginComponent.prototype.register = function () {
        var _this = this;
        if (this.user.password != this.user.confirmPassword) {
            this.alert("Your passwords do not match.");
            return;
        }
        this.userService.register(this.user)
            .then(function () {
            _this.processing = false;
            _this.alert("Your account was successfully created.");
            _this.isLoggingIn = true;
        })
            .catch(function () {
            _this.processing = false;
            _this.alert("Unfortunately we were unable to create your account.");
        });
    };
    LoginComponent.prototype.forgotPassword = function () {
        var _this = this;
        dialogs_1.prompt({
            title: "Forgot Password",
            message: "Enter the email address you used to register for APP NAME to reset your password.",
            inputType: "email",
            defaultText: "",
            okButtonText: "Ok",
            cancelButtonText: "Cancel"
        }).then(function (data) {
            if (data.result) {
                _this.userService.resetPassword(data.text.trim())
                    .then(function () {
                    _this.alert("Your password was successfully reset. Please check your email for instructions on choosing a new password.");
                }).catch(function () {
                    _this.alert("Unfortunately, an error occurred resetting your password.");
                });
            }
        });
    };
    LoginComponent.prototype.focusPassword = function () {
        this.password.nativeElement.focus();
    };
    LoginComponent.prototype.focusConfirmPassword = function () {
        if (!this.isLoggingIn) {
            this.confirmPassword.nativeElement.focus();
        }
    };
    LoginComponent.prototype.alert = function (message) {
        return dialogs_1.alert({
            title: "Questionnaire",
            okButtonText: "OK",
            message: message
        });
    };
    __decorate([
        core_1.ViewChild("password"),
        __metadata("design:type", core_1.ElementRef)
    ], LoginComponent.prototype, "password", void 0);
    __decorate([
        core_1.ViewChild("confirmPassword"),
        __metadata("design:type", core_1.ElementRef)
    ], LoginComponent.prototype, "confirmPassword", void 0);
    LoginComponent = __decorate([
        core_1.Component({
            selector: "app-login",
            moduleId: module.id,
            templateUrl: "./login.component.html",
            styleUrls: ['./login.component.css']
        }),
        __metadata("design:paramtypes", [page_1.Page, user_service_1.UserService, router_1.RouterExtensions])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWlFO0FBQ2pFLHVEQUE0RDtBQUM1RCxpREFBZ0Q7QUFDaEQsc0RBQStEO0FBRS9ELG1EQUE0QztBQUM1Qyx1REFBcUQ7QUFRckQ7SUFPSSx3QkFBb0IsSUFBVSxFQUFVLFdBQXdCLEVBQVUsZ0JBQWtDO1FBQXhGLFNBQUksR0FBSixJQUFJLENBQU07UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUFVLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFONUcsZ0JBQVcsR0FBRyxJQUFJLENBQUM7UUFFbkIsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUtmLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztRQUNqQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksaUJBQUksRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLHVCQUF1QixDQUFDO1FBQzFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQztJQUNwQyxDQUFDO0lBRUQsbUNBQVUsR0FBVjtRQUNJLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQ3pDLENBQUM7SUFFRCwrQkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDekMsSUFBSSxDQUFDLEtBQUssQ0FBQyxvREFBb0QsQ0FBQyxDQUFDO1lBQ2pFLE9BQU87U0FDVjtRQUVELElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNsQixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7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N0IsZ0JBQVMsQ0FBQyxpQkFBaUIsQ0FBQztrQ0FBa0IsaUJBQVU7MkRBQUM7SUFMakQsY0FBYztRQU4xQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFdBQVc7WUFDckIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx3QkFBd0I7WUFDckMsU0FBUyxFQUFFLENBQUMsdUJBQXVCLENBQUM7U0FDdkMsQ0FBQzt5Q0FRNEIsV0FBSSxFQUF1QiwwQkFBVyxFQUE0Qix5QkFBZ0I7T0FQbkcsY0FBYyxDQWlHMUI7SUFBRCxxQkFBQztDQUFBLEFBakdELElBaUdDO0FBakdZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBWaWV3Q2hpbGQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgYWxlcnQsIHByb21wdCB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2RpYWxvZ3NcIjtcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlXCI7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4uL3NoYXJlZC91c2VyLm1vZGVsXCI7XG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gXCIuLi9zaGFyZWQvdXNlci5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcImFwcC1sb2dpblwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9sb2dpbi5jb21wb25lbnQuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogWycuL2xvZ2luLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCB7XG4gICAgaXNMb2dnaW5nSW4gPSB0cnVlO1xuICAgIHVzZXI6IFVzZXI7XG4gICAgcHJvY2Vzc2luZyA9IGZhbHNlO1xuICAgIEBWaWV3Q2hpbGQoXCJwYXNzd29yZFwiKSBwYXNzd29yZDogRWxlbWVudFJlZjtcbiAgICBAVmlld0NoaWxkKFwiY29uZmlybVBhc3N3b3JkXCIpIGNvbmZpcm1QYXNzd29yZDogRWxlbWVudFJlZjtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcGFnZTogUGFnZSwgcHJpdmF0ZSB1c2VyU2VydmljZTogVXNlclNlcnZpY2UsIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucykge1xuICAgICAgICB0aGlzLnBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcbiAgICAgICAgdGhpcy51c2VyID0gbmV3IFVzZXIoKTtcbiAgICAgICAgdGhpcy51c2VyLmVtYWlsID0gXCJ1c2VyQG5hdGl2ZXNjcmlwdC5vcmdcIjtcbiAgICAgICAgdGhpcy51c2VyLnBhc3N3b3JkID0gXCJwYXNzd29yZFwiO1xuICAgIH1cblxuICAgIHRvZ2dsZUZvcm0oKSB7XG4gICAgICAgIHRoaXMuaXNMb2dnaW5nSW4gPSAhdGhpcy5pc0xvZ2dpbmdJbjtcbiAgICB9XG5cbiAgICBzdWJtaXQoKSB7XG4gICAgICAgIGlmICghdGhpcy51c2VyLmVtYWlsIHx8ICF0aGlzLnVzZXIucGFzc3dvcmQpIHtcbiAgICAgICAgICAgIHRoaXMuYWxlcnQoXCJQbGVhc2UgcHJvdmlkZSBib3RoIGFuIGVtYWlsIGFkZHJlc3MgYW5kIHBhc3N3b3JkLlwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucHJvY2Vzc2luZyA9IHRydWU7XG4gICAgICAgIGlmICh0aGlzLmlzTG9nZ2luZ0luKSB7XG4gICAgICAgICAgICB0aGlzLmxvZ2luKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnJlZ2lzdGVyKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsb2dpbigpIHtcbiAgICAgICAgdGhpcy51c2VyU2VydmljZS5sb2dpbih0aGlzLnVzZXIpXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9jZXNzaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9ob21lXCJdLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMucHJvY2Vzc2luZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuYWxlcnQoXCJVbmZvcnR1bmF0ZWx5IHdlIGNvdWxkIG5vdCBmaW5kIHlvdXIgYWNjb3VudC5cIik7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZWdpc3RlcigpIHtcbiAgICAgICAgaWYgKHRoaXMudXNlci5wYXNzd29yZCAhPSB0aGlzLnVzZXIuY29uZmlybVBhc3N3b3JkKSB7XG4gICAgICAgICAgICB0aGlzLmFsZXJ0KFwiWW91ciBwYXNzd29yZHMgZG8gbm90IG1hdGNoLlwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnVzZXJTZXJ2aWNlLnJlZ2lzdGVyKHRoaXMudXNlcilcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb2Nlc3NpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0KFwiWW91ciBhY2NvdW50IHdhcyBzdWNjZXNzZnVsbHkgY3JlYXRlZC5cIik7XG4gICAgICAgICAgICAgICAgdGhpcy5pc0xvZ2dpbmdJbiA9IHRydWU7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb2Nlc3NpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLmFsZXJ0KFwiVW5mb3J0dW5hdGVseSB3ZSB3ZXJlIHVuYWJsZSB0byBjcmVhdGUgeW91ciBhY2NvdW50LlwiKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZvcmdvdFBhc3N3b3JkKCkge1xuICAgICAgICBwcm9tcHQoe1xuICAgICAgICAgICAgdGl0bGU6IFwiRm9yZ290IFBhc3N3b3JkXCIsXG4gICAgICAgICAgICBtZXNzYWdlOiBcIkVudGVyIHRoZSBlbWFpbCBhZGRyZXNzIHlvdSB1c2VkIHRvIHJlZ2lzdGVyIGZvciBBUFAgTkFNRSB0byByZXNldCB5b3VyIHBhc3N3b3JkLlwiLFxuICAgICAgICAgICAgaW5wdXRUeXBlOiBcImVtYWlsXCIsXG4gICAgICAgICAgICBkZWZhdWx0VGV4dDogXCJcIixcbiAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJPa1wiLFxuICAgICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCJDYW5jZWxcIlxuICAgICAgICB9KS50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICBpZiAoZGF0YS5yZXN1bHQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVzZXJTZXJ2aWNlLnJlc2V0UGFzc3dvcmQoZGF0YS50ZXh0LnRyaW0oKSlcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGVydChcIllvdXIgcGFzc3dvcmQgd2FzIHN1Y2Nlc3NmdWxseSByZXNldC4gUGxlYXNlIGNoZWNrIHlvdXIgZW1haWwgZm9yIGluc3RydWN0aW9ucyBvbiBjaG9vc2luZyBhIG5ldyBwYXNzd29yZC5cIik7XG4gICAgICAgICAgICAgICAgICAgIH0pLmNhdGNoKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWxlcnQoXCJVbmZvcnR1bmF0ZWx5LCBhbiBlcnJvciBvY2N1cnJlZCByZXNldHRpbmcgeW91ciBwYXNzd29yZC5cIik7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmb2N1c1Bhc3N3b3JkKCkge1xuICAgICAgICB0aGlzLnBhc3N3b3JkLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICB9XG4gICAgZm9jdXNDb25maXJtUGFzc3dvcmQoKSB7XG4gICAgICAgIGlmICghdGhpcy5pc0xvZ2dpbmdJbikge1xuICAgICAgICAgICAgdGhpcy5jb25maXJtUGFzc3dvcmQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYWxlcnQobWVzc2FnZTogc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiBhbGVydCh7XG4gICAgICAgICAgICB0aXRsZTogXCJRdWVzdGlvbm5haXJlXCIsXG4gICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiT0tcIixcbiAgICAgICAgICAgIG1lc3NhZ2U6IG1lc3NhZ2VcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG4iXX0=