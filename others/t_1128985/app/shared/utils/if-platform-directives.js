"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_1 = require("platform");
var platform_providers_1 = require("nativescript-angular/platform-providers");
var IfAndroidDirective = (function () {
    function IfAndroidDirective(device, container, templateRef) {
        if (device.os === platform_1.platformNames.android) {
            container.createEmbeddedView(templateRef);
        }
    }
    return IfAndroidDirective;
}());
IfAndroidDirective = __decorate([
    core_1.Directive({ selector: "[mbIfAndroid]" }),
    __param(0, core_1.Inject(platform_providers_1.DEVICE)),
    __metadata("design:paramtypes", [Object, core_1.ViewContainerRef, core_1.TemplateRef])
], IfAndroidDirective);
exports.IfAndroidDirective = IfAndroidDirective;
var IfIosDirective = (function () {
    function IfIosDirective(device, container, templateRef) {
        if (device.os === platform_1.platformNames.ios) {
            container.createEmbeddedView(templateRef);
        }
    }
    return IfIosDirective;
}());
IfIosDirective = __decorate([
    core_1.Directive({ selector: "[mbIfIos]" }),
    __param(0, core_1.Inject(platform_providers_1.DEVICE)),
    __metadata("design:paramtypes", [Object, core_1.ViewContainerRef, core_1.TemplateRef])
], IfIosDirective);
exports.IfIosDirective = IfIosDirective;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWYtcGxhdGZvcm0tZGlyZWN0aXZlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImlmLXBsYXRmb3JtLWRpcmVjdGl2ZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBaUY7QUFDakYscUNBQWlEO0FBQ2pELDhFQUFpRTtBQUdqRSxJQUFhLGtCQUFrQjtJQUMzQiw0QkFBNkIsTUFBYyxFQUFFLFNBQTJCLEVBQUUsV0FBZ0M7UUFDdEcsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsS0FBSyx3QkFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDdEMsU0FBUyxDQUFDLGtCQUFrQixDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzlDLENBQUM7SUFDTCxDQUFDO0lBQ0wseUJBQUM7QUFBRCxDQUFDLEFBTkQsSUFNQztBQU5ZLGtCQUFrQjtJQUQ5QixnQkFBUyxDQUFDLEVBQUUsUUFBUSxFQUFFLGVBQWUsRUFBRSxDQUFDO0lBRXZCLFdBQUEsYUFBTSxDQUFDLDJCQUFNLENBQUMsQ0FBQTs2Q0FBNEIsdUJBQWdCLEVBQWUsa0JBQVc7R0FEekYsa0JBQWtCLENBTTlCO0FBTlksZ0RBQWtCO0FBUy9CLElBQWEsY0FBYztJQUN2Qix3QkFBNkIsTUFBYyxFQUFFLFNBQTJCLEVBQUUsV0FBZ0M7UUFDdEcsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsS0FBSyx3QkFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDbEMsU0FBUyxDQUFDLGtCQUFrQixDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzlDLENBQUM7SUFDTCxDQUFDO0lBQ0wscUJBQUM7QUFBRCxDQUFDLEFBTkQsSUFNQztBQU5ZLGNBQWM7SUFEMUIsZ0JBQVMsQ0FBQyxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUUsQ0FBQztJQUVuQixXQUFBLGFBQU0sQ0FBQywyQkFBTSxDQUFDLENBQUE7NkNBQTRCLHVCQUFnQixFQUFlLGtCQUFXO0dBRHpGLGNBQWMsQ0FNMUI7QUFOWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgVmlld0NvbnRhaW5lclJlZiwgVGVtcGxhdGVSZWYsIEluamVjdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBEZXZpY2UsIHBsYXRmb3JtTmFtZXMgfSBmcm9tIFwicGxhdGZvcm1cIjtcbmltcG9ydCB7IERFVklDRSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9wbGF0Zm9ybS1wcm92aWRlcnNcIjtcblxuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiBcIlttYklmQW5kcm9pZF1cIiB9KVxuZXhwb3J0IGNsYXNzIElmQW5kcm9pZERpcmVjdGl2ZSB7XG4gICAgY29uc3RydWN0b3IoIEBJbmplY3QoREVWSUNFKSBkZXZpY2U6IERldmljZSwgY29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmLCB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8T2JqZWN0Pikge1xuICAgICAgICBpZiAoZGV2aWNlLm9zID09PSBwbGF0Zm9ybU5hbWVzLmFuZHJvaWQpIHtcbiAgICAgICAgICAgIGNvbnRhaW5lci5jcmVhdGVFbWJlZGRlZFZpZXcodGVtcGxhdGVSZWYpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5ARGlyZWN0aXZlKHsgc2VsZWN0b3I6IFwiW21iSWZJb3NdXCIgfSlcbmV4cG9ydCBjbGFzcyBJZklvc0RpcmVjdGl2ZSB7XG4gICAgY29uc3RydWN0b3IoIEBJbmplY3QoREVWSUNFKSBkZXZpY2U6IERldmljZSwgY29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmLCB0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8T2JqZWN0Pikge1xuICAgICAgICBpZiAoZGV2aWNlLm9zID09PSBwbGF0Zm9ybU5hbWVzLmlvcykge1xuICAgICAgICAgICAgY29udGFpbmVyLmNyZWF0ZUVtYmVkZGVkVmlldyh0ZW1wbGF0ZVJlZik7XG4gICAgICAgIH1cbiAgICB9XG59Il19