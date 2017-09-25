/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
Zone.__load_patch('cordova', function (global, Zone, api) {
    if (global.cordova) {
        var SUCCESS_SOURCE_1 = 'cordova.exec.success';
        var ERROR_SOURCE_1 = 'cordova.exec.error';
        var FUNCTION_1 = 'function';
        var nativeExec_1 = api.patchMethod(global.cordova, 'exec', function (delegate) { return function (self, args) {
            if (args.length > 0 && typeof args[0] === FUNCTION_1) {
                args[0] = Zone.current.wrap(args[0], SUCCESS_SOURCE_1);
            }
            if (args.length > 1 && typeof args[1] === FUNCTION_1) {
                args[1] = Zone.current.wrap(args[1], ERROR_SOURCE_1);
            }
            return nativeExec_1.apply(self, args);
        }; });
    }
});
Zone.__load_patch('cordova.FileReader', function (global, Zone, api) {
    if (global.cordova && typeof global['FileReader'] !== 'undefined') {
        document.addEventListener('deviceReady', function () {
            var FileReader = global['FileReader'];
            ['abort', 'error', 'load', 'loadstart', 'loadend', 'progress'].forEach(function (prop) {
                var eventNameSymbol = Zone.__symbol__('ON_PROPERTY' + prop);
                Object.defineProperty(FileReader.prototype, eventNameSymbol, {
                    configurable: true,
                    get: function () {
                        return this._realReader && this._realReader[eventNameSymbol];
                    }
                });
            });
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZG92YS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNvcmRvdmEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBQ0gsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLEVBQUUsVUFBQyxNQUFXLEVBQUUsSUFBYyxFQUFFLEdBQWlCO0lBQzFFLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQ25CLElBQU0sZ0JBQWMsR0FBRyxzQkFBc0IsQ0FBQztRQUM5QyxJQUFNLGNBQVksR0FBRyxvQkFBb0IsQ0FBQztRQUMxQyxJQUFNLFVBQVEsR0FBRyxVQUFVLENBQUM7UUFDNUIsSUFBTSxZQUFVLEdBQWEsR0FBRyxDQUFDLFdBQVcsQ0FDeEMsTUFBTSxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBQyxRQUFrQixJQUFLLE9BQUEsVUFBUyxJQUFTLEVBQUUsSUFBVztZQUM3RSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxVQUFRLENBQUMsQ0FBQyxDQUFDO2dCQUNuRCxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLGdCQUFjLENBQUMsQ0FBQztZQUN2RCxDQUFDO1lBQ0QsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssVUFBUSxDQUFDLENBQUMsQ0FBQztnQkFDbkQsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxjQUFZLENBQUMsQ0FBQztZQUNyRCxDQUFDO1lBQ0QsTUFBTSxDQUFDLFlBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3RDLENBQUMsRUFSK0MsQ0FRL0MsQ0FBQyxDQUFDO0lBQ1QsQ0FBQztBQUNILENBQUMsQ0FBQyxDQUFDO0FBRUgsSUFBSSxDQUFDLFlBQVksQ0FBQyxvQkFBb0IsRUFBRSxVQUFDLE1BQVcsRUFBRSxJQUFjLEVBQUUsR0FBaUI7SUFDckYsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sSUFBSSxPQUFPLE1BQU0sQ0FBQyxZQUFZLENBQUMsS0FBSyxXQUFXLENBQUMsQ0FBQyxDQUFDO1FBQ2xFLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLEVBQUU7WUFDdkMsSUFBTSxVQUFVLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQ3hDLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxVQUFVLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQSxJQUFJO2dCQUN6RSxJQUFNLGVBQWUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsQ0FBQztnQkFDOUQsTUFBTSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsU0FBUyxFQUFFLGVBQWUsRUFBRTtvQkFDM0QsWUFBWSxFQUFFLElBQUk7b0JBQ2xCLEdBQUcsRUFBRTt3QkFDSCxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQyxDQUFDO29CQUMvRCxDQUFDO2lCQUNGLENBQUMsQ0FBQztZQUNMLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0FBQ0gsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5ab25lLl9fbG9hZF9wYXRjaCgnY29yZG92YScsIChnbG9iYWw6IGFueSwgWm9uZTogWm9uZVR5cGUsIGFwaTogX1pvbmVQcml2YXRlKSA9PiB7XG4gIGlmIChnbG9iYWwuY29yZG92YSkge1xuICAgIGNvbnN0IFNVQ0NFU1NfU09VUkNFID0gJ2NvcmRvdmEuZXhlYy5zdWNjZXNzJztcbiAgICBjb25zdCBFUlJPUl9TT1VSQ0UgPSAnY29yZG92YS5leGVjLmVycm9yJztcbiAgICBjb25zdCBGVU5DVElPTiA9ICdmdW5jdGlvbic7XG4gICAgY29uc3QgbmF0aXZlRXhlYzogRnVuY3Rpb24gPSBhcGkucGF0Y2hNZXRob2QoXG4gICAgICAgIGdsb2JhbC5jb3Jkb3ZhLCAnZXhlYycsIChkZWxlZ2F0ZTogRnVuY3Rpb24pID0+IGZ1bmN0aW9uKHNlbGY6IGFueSwgYXJnczogYW55W10pIHtcbiAgICAgICAgICBpZiAoYXJncy5sZW5ndGggPiAwICYmIHR5cGVvZiBhcmdzWzBdID09PSBGVU5DVElPTikge1xuICAgICAgICAgICAgYXJnc1swXSA9IFpvbmUuY3VycmVudC53cmFwKGFyZ3NbMF0sIFNVQ0NFU1NfU09VUkNFKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGFyZ3MubGVuZ3RoID4gMSAmJiB0eXBlb2YgYXJnc1sxXSA9PT0gRlVOQ1RJT04pIHtcbiAgICAgICAgICAgIGFyZ3NbMV0gPSBab25lLmN1cnJlbnQud3JhcChhcmdzWzFdLCBFUlJPUl9TT1VSQ0UpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gbmF0aXZlRXhlYy5hcHBseShzZWxmLCBhcmdzKTtcbiAgICAgICAgfSk7XG4gIH1cbn0pO1xuXG5ab25lLl9fbG9hZF9wYXRjaCgnY29yZG92YS5GaWxlUmVhZGVyJywgKGdsb2JhbDogYW55LCBab25lOiBab25lVHlwZSwgYXBpOiBfWm9uZVByaXZhdGUpID0+IHtcbiAgaWYgKGdsb2JhbC5jb3Jkb3ZhICYmIHR5cGVvZiBnbG9iYWxbJ0ZpbGVSZWFkZXInXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdkZXZpY2VSZWFkeScsICgpID0+IHtcbiAgICAgIGNvbnN0IEZpbGVSZWFkZXIgPSBnbG9iYWxbJ0ZpbGVSZWFkZXInXTtcbiAgICAgIFsnYWJvcnQnLCAnZXJyb3InLCAnbG9hZCcsICdsb2Fkc3RhcnQnLCAnbG9hZGVuZCcsICdwcm9ncmVzcyddLmZvckVhY2gocHJvcCA9PiB7XG4gICAgICAgIGNvbnN0IGV2ZW50TmFtZVN5bWJvbCA9IFpvbmUuX19zeW1ib2xfXygnT05fUFJPUEVSVFknICsgcHJvcCk7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShGaWxlUmVhZGVyLnByb3RvdHlwZSwgZXZlbnROYW1lU3ltYm9sLCB7XG4gICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcmVhbFJlYWRlciAmJiB0aGlzLl9yZWFsUmVhZGVyW2V2ZW50TmFtZVN5bWJvbF07XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG59KTsiXX0=