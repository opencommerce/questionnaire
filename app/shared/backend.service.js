"use strict";
// The following is a sample implementation of a backend service using Parse (https://parseplatform.org).
// Feel free to swap in your own service / APIs / etc here for your own apps.
Object.defineProperty(exports, "__esModule", { value: true });
// import * as Parse from 'parse';
var parse_js_1 = require("parse/dist/parse.js");
parse_js_1.default.initialize("123", "xxx");
parse_js_1.default.serverURL = 'http://bcd24438.ngrok.io/parse';
var BackendService = /** @class */ (function () {
    function BackendService() {
    }
    BackendService.isUserLoggedIn = function () {
        return !!parse_js_1.default.User.current();
    };
    return BackendService;
}());
exports.BackendService = BackendService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2VuZC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYmFja2VuZC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSx5R0FBeUc7QUFDekcsNkVBQTZFOztBQUc3RSxrQ0FBa0M7QUFDbEMsZ0RBQXdDO0FBR3hDLGtCQUFLLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztBQUMvQixrQkFBSyxDQUFDLFNBQVMsR0FBRyxnQ0FBZ0MsQ0FBQTtBQUVsRDtJQUFBO0lBSUEsQ0FBQztJQUhVLDZCQUFjLEdBQXJCO1FBQ0ksT0FBTyxDQUFDLENBQUMsa0JBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDbEMsQ0FBQztJQUNMLHFCQUFDO0FBQUQsQ0FBQyxBQUpELElBSUM7QUFKWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSBmb2xsb3dpbmcgaXMgYSBzYW1wbGUgaW1wbGVtZW50YXRpb24gb2YgYSBiYWNrZW5kIHNlcnZpY2UgdXNpbmcgUGFyc2UgKGh0dHBzOi8vcGFyc2VwbGF0Zm9ybS5vcmcpLlxuLy8gRmVlbCBmcmVlIHRvIHN3YXAgaW4geW91ciBvd24gc2VydmljZSAvIEFQSXMgLyBldGMgaGVyZSBmb3IgeW91ciBvd24gYXBwcy5cblxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG4vLyBpbXBvcnQgKiBhcyBQYXJzZSBmcm9tICdwYXJzZSc7XG5pbXBvcnQgUGFyc2UgZnJvbSAncGFyc2UvZGlzdC9wYXJzZS5qcyc7XG5cblxuUGFyc2UuaW5pdGlhbGl6ZShcIjEyM1wiLCBcInh4eFwiKTtcblBhcnNlLnNlcnZlclVSTCA9ICdodHRwOi8vYmNkMjQ0Mzgubmdyb2suaW8vcGFyc2UnXG5cbmV4cG9ydCBjbGFzcyBCYWNrZW5kU2VydmljZSB7XG4gICAgc3RhdGljIGlzVXNlckxvZ2dlZEluKCkge1xuICAgICAgICByZXR1cm4gISFQYXJzZS5Vc2VyLmN1cnJlbnQoKTtcbiAgICB9XG59Il19