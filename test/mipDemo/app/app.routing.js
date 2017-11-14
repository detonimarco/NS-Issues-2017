"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var scan_component_1 = require("./scan/scan.component");
var arrows_component_1 = require("./arrows/arrows.component");
var accelerometer_component_1 = require("./accelerometer/accelerometer.component");
var appRoutes = [
    { path: "", redirectTo: "/scan", pathMatch: "full", },
    { path: "scan", component: scan_component_1.ScanComponent },
    { path: "arrows", component: arrows_component_1.ArrowsComponent },
    { path: "accelerometer", component: accelerometer_component_1.AccelerometerComponent },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.NativeScriptRouterModule.forRoot(appRoutes)],
            exports: [router_1.NativeScriptRouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnJvdXRpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHAucm91dGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5QztBQUN6QyxzREFBdUU7QUFNdkUsd0RBQXNEO0FBQ3RELDhEQUE0RDtBQUM1RCxtRkFBaUY7QUFFakYsSUFBTSxTQUFTLEdBQVc7SUFDdEIsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sR0FBRztJQUNyRCxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLDhCQUFhLEVBQUU7SUFDMUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxrQ0FBZSxFQUFFO0lBQzlDLEVBQUUsSUFBSSxFQUFFLGVBQWUsRUFBRSxTQUFTLEVBQUUsZ0RBQXNCLEVBQUU7Q0FDL0QsQ0FBQztBQU1GO0lBQUE7SUFBZ0MsQ0FBQztJQUFwQixnQkFBZ0I7UUFKNUIsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFLENBQUMsaUNBQXdCLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ3RELE9BQU8sRUFBRSxDQUFDLGlDQUF3QixDQUFDO1NBQ3RDLENBQUM7T0FDVyxnQkFBZ0IsQ0FBSTtJQUFELHVCQUFDO0NBQUEsQUFBakMsSUFBaUM7QUFBcEIsNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgUm91dGVzIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuXG5pbXBvcnQgeyBJdGVtc0NvbXBvbmVudCB9IGZyb20gXCIuL2l0ZW0vaXRlbXMuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBJdGVtRGV0YWlsQ29tcG9uZW50IH0gZnJvbSBcIi4vaXRlbS9pdGVtLWRldGFpbC5jb21wb25lbnRcIjtcblxuaW1wb3J0IHsgU2NhbkNvbXBvbmVudCB9IGZyb20gXCIuL3NjYW4vc2Nhbi5jb21wb25lbnRcIjtcbmltcG9ydCB7IEFycm93c0NvbXBvbmVudCB9IGZyb20gXCIuL2Fycm93cy9hcnJvd3MuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBBY2NlbGVyb21ldGVyQ29tcG9uZW50IH0gZnJvbSBcIi4vYWNjZWxlcm9tZXRlci9hY2NlbGVyb21ldGVyLmNvbXBvbmVudFwiO1xuXG5jb25zdCBhcHBSb3V0ZXM6IFJvdXRlcyA9IFtcbiAgICB7IHBhdGg6IFwiXCIsIHJlZGlyZWN0VG86IFwiL3NjYW5cIiwgcGF0aE1hdGNoOiBcImZ1bGxcIiwgfSxcbiAgICB7IHBhdGg6IFwic2NhblwiLCBjb21wb25lbnQ6IFNjYW5Db21wb25lbnQgfSxcbiAgICB7IHBhdGg6IFwiYXJyb3dzXCIsIGNvbXBvbmVudDogQXJyb3dzQ29tcG9uZW50IH0sXG4gICAgeyBwYXRoOiBcImFjY2VsZXJvbWV0ZXJcIiwgY29tcG9uZW50OiBBY2NlbGVyb21ldGVyQ29tcG9uZW50IH0sXG5dO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yUm9vdChhcHBSb3V0ZXMpXSxcbiAgICBleHBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBSb3V0aW5nTW9kdWxlIHsgfSJdfQ==