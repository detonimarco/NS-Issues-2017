/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @fileoverview
 * @suppress {missingRequire}
 */
(function (global) {
    // Detect and setup WTF.
    var wtfTrace = null;
    var wtfEvents = null;
    var wtfEnabled = (function () {
        var wtf = global['wtf'];
        if (wtf) {
            wtfTrace = wtf.trace;
            if (wtfTrace) {
                wtfEvents = wtfTrace.events;
                return true;
            }
        }
        return false;
    })();
    var WtfZoneSpec = (function () {
        function WtfZoneSpec() {
            this.name = 'WTF';
        }
        WtfZoneSpec.prototype.onFork = function (parentZoneDelegate, currentZone, targetZone, zoneSpec) {
            var retValue = parentZoneDelegate.fork(targetZone, zoneSpec);
            WtfZoneSpec.forkInstance(zonePathName(targetZone), retValue.name);
            return retValue;
        };
        WtfZoneSpec.prototype.onInvoke = function (parentZoneDelegate, currentZone, targetZone, delegate, applyThis, applyArgs, source) {
            var scope = WtfZoneSpec.invokeScope[source];
            if (!scope) {
                scope = WtfZoneSpec.invokeScope[source] =
                    wtfEvents.createScope("Zone:invoke:" + source + "(ascii zone)");
            }
            return wtfTrace.leaveScope(scope(zonePathName(targetZone)), parentZoneDelegate.invoke(targetZone, delegate, applyThis, applyArgs, source));
        };
        WtfZoneSpec.prototype.onHandleError = function (parentZoneDelegate, currentZone, targetZone, error) {
            return parentZoneDelegate.handleError(targetZone, error);
        };
        WtfZoneSpec.prototype.onScheduleTask = function (parentZoneDelegate, currentZone, targetZone, task) {
            var key = task.type + ':' + task.source;
            var instance = WtfZoneSpec.scheduleInstance[key];
            if (!instance) {
                instance = WtfZoneSpec.scheduleInstance[key] =
                    wtfEvents.createInstance("Zone:schedule:" + key + "(ascii zone, any data)");
            }
            var retValue = parentZoneDelegate.scheduleTask(targetZone, task);
            instance(zonePathName(targetZone), shallowObj(task.data, 2));
            return retValue;
        };
        WtfZoneSpec.prototype.onInvokeTask = function (parentZoneDelegate, currentZone, targetZone, task, applyThis, applyArgs) {
            var source = task.source;
            var scope = WtfZoneSpec.invokeTaskScope[source];
            if (!scope) {
                scope = WtfZoneSpec.invokeTaskScope[source] =
                    wtfEvents.createScope("Zone:invokeTask:" + source + "(ascii zone)");
            }
            return wtfTrace.leaveScope(scope(zonePathName(targetZone)), parentZoneDelegate.invokeTask(targetZone, task, applyThis, applyArgs));
        };
        WtfZoneSpec.prototype.onCancelTask = function (parentZoneDelegate, currentZone, targetZone, task) {
            var key = task.source;
            var instance = WtfZoneSpec.cancelInstance[key];
            if (!instance) {
                instance = WtfZoneSpec.cancelInstance[key] =
                    wtfEvents.createInstance("Zone:cancel:" + key + "(ascii zone, any options)");
            }
            var retValue = parentZoneDelegate.cancelTask(targetZone, task);
            instance(zonePathName(targetZone), shallowObj(task.data, 2));
            return retValue;
        };
        ;
        WtfZoneSpec.forkInstance = wtfEnabled && wtfEvents.createInstance('Zone:fork(ascii zone, ascii newZone)');
        WtfZoneSpec.scheduleInstance = {};
        WtfZoneSpec.cancelInstance = {};
        WtfZoneSpec.invokeScope = {};
        WtfZoneSpec.invokeTaskScope = {};
        return WtfZoneSpec;
    }());
    function shallowObj(obj, depth) {
        if (!depth)
            return null;
        var out = {};
        for (var key in obj) {
            if (obj.hasOwnProperty(key)) {
                var value = obj[key];
                switch (typeof value) {
                    case 'object':
                        var name_1 = value && value.constructor && value.constructor.name;
                        value = name_1 == Object.name ? shallowObj(value, depth - 1) : name_1;
                        break;
                    case 'function':
                        value = value.name || undefined;
                        break;
                }
                out[key] = value;
            }
        }
        return out;
    }
    function zonePathName(zone) {
        var name = zone.name;
        zone = zone.parent;
        while (zone != null) {
            name = zone.name + '::' + name;
            zone = zone.parent;
        }
        return name;
    }
    Zone['wtfZoneSpec'] = !wtfEnabled ? null : new WtfZoneSpec();
})(typeof window === 'object' && window || typeof self === 'object' && self || global);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid3RmLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsid3RmLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRztBQUNIOzs7R0FHRztBQUVILENBQUMsVUFBUyxNQUFXO0lBb0JuQix3QkFBd0I7SUFDeEIsSUFBSSxRQUFRLEdBQWEsSUFBSSxDQUFDO0lBQzlCLElBQUksU0FBUyxHQUFjLElBQUksQ0FBQztJQUNoQyxJQUFNLFVBQVUsR0FBWSxDQUFDO1FBQzNCLElBQU0sR0FBRyxHQUFRLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMvQixFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ1IsUUFBUSxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUM7WUFDckIsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztnQkFDYixTQUFTLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQztnQkFDNUIsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNkLENBQUM7UUFDSCxDQUFDO1FBQ0QsTUFBTSxDQUFDLEtBQUssQ0FBQztJQUNmLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFFTDtRQUFBO1lBQ0UsU0FBSSxHQUFXLEtBQUssQ0FBQztRQTZFdkIsQ0FBQztRQXBFQyw0QkFBTSxHQUFOLFVBQ0ksa0JBQWdDLEVBQUUsV0FBaUIsRUFBRSxVQUFnQixFQUNyRSxRQUFrQjtZQUNwQixJQUFNLFFBQVEsR0FBRyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBQy9ELFdBQVcsQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNsRSxNQUFNLENBQUMsUUFBUSxDQUFDO1FBQ2xCLENBQUM7UUFFRCw4QkFBUSxHQUFSLFVBQ0ksa0JBQWdDLEVBQUUsV0FBaUIsRUFBRSxVQUFnQixFQUFFLFFBQWtCLEVBQ3pGLFNBQWMsRUFB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QUFXLElBQVUsS0FBSyxDQUFDLFdBQVksQ0FBQyxJQUFJLENBQUM7d0JBQ3pFLEtBQUssR0FBRyxNQUFJLElBQVUsTUFBTyxDQUFDLElBQUksR0FBRyxVQUFVLENBQUMsS0FBSyxFQUFFLEtBQUssR0FBRyxDQUFDLENBQUMsR0FBRyxNQUFJLENBQUM7d0JBQ3pFLEtBQUssQ0FBQztvQkFDUixLQUFLLFVBQVU7d0JBQ2IsS0FBSyxHQUFHLEtBQUssQ0FBQyxJQUFJLElBQUksU0FBUyxDQUFDO3dCQUNoQyxLQUFLLENBQUM7Z0JBQ1YsQ0FBQztnQkFDRCxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDO1lBQ25CLENBQUM7UUFDSCxDQUFDO1FBQ0QsTUFBTSxDQUFDLEdBQUcsQ0FBQztJQUNiLENBQUM7SUFFRCxzQkFBc0IsSUFBVTtRQUM5QixJQUFJLElBQUksR0FBVyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQzdCLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ25CLE9BQU8sSUFBSSxJQUFJLElBQUksRUFBRSxDQUFDO1lBQ3BCLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLENBQUM7WUFDL0IsSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDckIsQ0FBQztRQUNELE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUEsSUFBWSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsVUFBVSxHQUFHLElBQUksR0FBRyxJQUFJLFdBQVcsRUFBRSxDQUFDO0FBQ3hFLENBQUMsQ0FBQyxDQUFDLE9BQU8sTUFBTSxLQUFLLFFBQVEsSUFBSSxNQUFNLElBQUksT0FBTyxJQUFJLEtBQUssUUFBUSxJQUFJLElBQUksSUFBSSxNQUFNLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgSW5jLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cbi8qKlxuICogQGZpbGVvdmVydmlld1xuICogQHN1cHByZXNzIHttaXNzaW5nUmVxdWlyZX1cbiAqL1xuXG4oZnVuY3Rpb24oZ2xvYmFsOiBhbnkpIHtcbiAgaW50ZXJmYWNlIFd0ZiB7XG4gICAgdHJhY2U6IFd0ZlRyYWNlO1xuICB9XG4gIGludGVyZmFjZSBXdGZTY29wZSB7fVxuICBpbnRlcmZhY2UgV3RmUmFuZ2Uge31cbiAgaW50ZXJmYWNlIFd0ZlRyYWNlIHtcbiAgICBldmVudHM6IFd0ZkV2ZW50cztcbiAgICBsZWF2ZVNjb3BlKHNjb3BlOiBXdGZTY29wZSwgcmV0dXJuVmFsdWU/OiBhbnkpOiB2b2lkO1xuICAgIGJlZ2luVGltZVJhbmdlKHJhbmdlVHlwZTogc3RyaW5nLCBhY3Rpb246IHN0cmluZyk6IFd0ZlJhbmdlO1xuICAgIGVuZFRpbWVSYW5nZShyYW5nZTogV3RmUmFuZ2UpOiB2b2lkO1xuICB9XG4gIGludGVyZmFjZSBXdGZFdmVudHMge1xuICAgIGNyZWF0ZVNjb3BlKHNpZ25hdHVyZTogc3RyaW5nLCBmbGFncz86IGFueSk6IFd0ZlNjb3BlRm47XG4gICAgY3JlYXRlSW5zdGFuY2Uoc2lnbmF0dXJlOiBzdHJpbmcsIGZsYWdzPzogYW55KTogV3RmRXZlbnRGbjtcbiAgfVxuXG4gIHR5cGUgV3RmU2NvcGVGbiA9ICguLi5hcmdzOiBhbnlbXSkgPT4gV3RmU2NvcGU7XG4gIHR5cGUgV3RmRXZlbnRGbiA9ICguLi5hcmdzOiBhbnlbXSkgPT4gYW55O1xuXG4gIC8vIERldGVjdCBhbmQgc2V0dXAgV1RGLlxuICBsZXQgd3RmVHJhY2U6IFd0ZlRyYWNlID0gbnVsbDtcbiAgbGV0IHd0ZkV2ZW50czogV3RmRXZlbnRzID0gbnVsbDtcbiAgY29uc3Qgd3RmRW5hYmxlZDogYm9vbGVhbiA9IChmdW5jdGlvbigpOiBib29sZWFuIHtcbiAgICBjb25zdCB3dGY6IFd0ZiA9IGdsb2JhbFsnd3RmJ107XG4gICAgaWYgKHd0Zikge1xuICAgICAgd3RmVHJhY2UgPSB3dGYudHJhY2U7XG4gICAgICBpZiAod3RmVHJhY2UpIHtcbiAgICAgICAgd3RmRXZlbnRzID0gd3RmVHJhY2UuZXZlbnRzO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9KSgpO1xuXG4gIGNsYXNzIFd0ZlpvbmVTcGVjIGltcGxlbWVudHMgWm9uZVNwZWMge1xuICAgIG5hbWU6IHN0cmluZyA9ICdXVEYnO1xuXG4gICAgc3RhdGljIGZvcmtJbnN0YW5jZSA9XG4gICAgICAgIHd0ZkVuYWJsZWQgJiYgd3RmRXZlbnRzLmNyZWF0ZUluc3RhbmNlKCdab25lOmZvcmsoYXNjaWkgem9uZSwgYXNjaWkgbmV3Wm9uZSknKTtcbiAgICBzdGF0aWMgc2NoZWR1bGVJbnN0YW5jZToge1trZXk6IHN0cmluZ106IFd0ZkV2ZW50Rm59ID0ge307XG4gICAgc3RhdGljIGNhbmNlbEluc3RhbmNlOiB7W2tleTogc3RyaW5nXTogV3RmRXZlbnRGbn0gPSB7fTtcbiAgICBzdGF0aWMgaW52b2tlU2NvcGU6IHtba2V5OiBzdHJpbmddOiBXdGZFdmVudEZufSA9IHt9O1xuICAgIHN0YXRpYyBpbnZva2VUYXNrU2NvcGU6IHtba2V5OiBzdHJpbmddOiBXdGZFdmVudEZufSA9IHt9O1xuXG4gICAgb25Gb3JrKFxuICAgICAgICBwYXJlbnRab25lRGVsZWdhdGU6IFpvbmVEZWxlZ2F0ZSwgY3VycmVudFpvbmU6IFpvbmUsIHRhcmdldFpvbmU6IFpvbmUsXG4gICAgICAgIHpvbmVTcGVjOiBab25lU3BlYyk6IFpvbmUge1xuICAgICAgY29uc3QgcmV0VmFsdWUgPSBwYXJlbnRab25lRGVsZWdhdGUuZm9yayh0YXJnZXRab25lLCB6b25lU3BlYyk7XG4gICAgICBXdGZab25lU3BlYy5mb3JrSW5zdGFuY2Uoem9uZVBhdGhOYW1lKHRhcmdldFpvbmUpLCByZXRWYWx1ZS5uYW1lKTtcbiAgICAgIHJldHVybiByZXRWYWx1ZTtcbiAgICB9XG5cbiAgICBvbkludm9rZShcbiAgICAgICAgcGFyZW50Wm9uZURlbGVnYXRlOiBab25lRGVsZWdhdGUsIGN1cnJlbnRab25lOiBab25lLCB0YXJnZXRab25lOiBab25lLCBkZWxlZ2F0ZTogRnVuY3Rpb24sXG4gICAgICAgIGFwcGx5VGhpczogYW55LCBhcHBseUFyZ3M6IGFueVtdLCBzb3VyY2U6IHN0cmluZyk6IGFueSB7XG4gICAgICBsZXQgc2NvcGUgPSBXdGZab25lU3BlYy5pbnZva2VTY29wZVtzb3VyY2VdO1xuICAgICAgaWYgKCFzY29wZSkge1xuICAgICAgICBzY29wZSA9IFd0ZlpvbmVTcGVjLmludm9rZVNjb3BlW3NvdXJjZV0gPVxuICAgICAgICAgICAgd3RmRXZlbnRzLmNyZWF0ZVNjb3BlKGBab25lOmludm9rZToke3NvdXJjZX0oYXNjaWkgem9uZSlgKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB3dGZUcmFjZS5sZWF2ZVNjb3BlKFxuICAgICAgICAgIHNjb3BlKHpvbmVQYXRoTmFtZSh0YXJnZXRab25lKSksXG4gICAgICAgICAgcGFyZW50Wm9uZURlbGVnYXRlLmludm9rZSh0YXJnZXRab25lLCBkZWxlZ2F0ZSwgYXBwbHlUaGlzLCBhcHBseUFyZ3MsIHNvdXJjZSkpO1xuICAgIH1cblxuXG4gICAgb25IYW5kbGVFcnJvcihcbiAgICAgICAgcGFyZW50Wm9uZURlbGVnYXRlOiBab25lRGVsZWdhdGUsIGN1cnJlbnRab25lOiBab25lLCB0YXJnZXRab25lOiBab25lLFxuICAgICAgICBlcnJvcjogYW55KTogYm9vbGVhbiB7XG4gICAgICByZXR1cm4gcGFyZW50Wm9uZURlbGVnYXRlLmhhbmRsZUVycm9yKHRhcmdldFpvbmUsIGVycm9yKTtcbiAgICB9XG5cbiAgICBvblNjaGVkdWxlVGFzayhcbiAgICAgICAgcGFyZW50Wm9uZURlbGVnYXRlOiBab25lRGVsZWdhdGUsIGN1cnJlbnRab25lOiBab25lLCB0YXJnZXRab25lOiBab25lLCB0YXNrOiBUYXNrKTogYW55IHtcbiAgICAgIGNvbnN0IGtleSA9IHRhc2sudHlwZSArICc6JyArIHRhc2suc291cmNlO1xuICAgICAgbGV0IGluc3RhbmNlID0gV3RmWm9uZVNwZWMuc2NoZWR1bGVJbnN0YW5jZVtrZXldO1xuICAgICAgaWYgKCFpbnN0YW5jZSkge1xuICAgICAgICBpbnN0YW5jZSA9IFd0ZlpvbmVTcGVjLnNjaGVkdWxlSW5zdGFuY2Vba2V5XSA9XG4gICAgICAgICAgICB3dGZFdmVudHMuY3JlYXRlSW5zdGFuY2UoYFpvbmU6c2NoZWR1bGU6JHtrZXl9KGFzY2lpIHpvbmUsIGFueSBkYXRhKWApO1xuICAgICAgfVxuICAgICAgY29uc3QgcmV0VmFsdWUgPSBwYXJlbnRab25lRGVsZWdhdGUuc2NoZWR1bGVUYXNrKHRhcmdldFpvbmUsIHRhc2spO1xuICAgICAgaW5zdGFuY2Uoem9uZVBhdGhOYW1lKHRhcmdldFpvbmUpLCBzaGFsbG93T2JqKHRhc2suZGF0YSwgMikpO1xuICAgICAgcmV0dXJuIHJldFZhbHVlO1xuICAgIH1cblxuXG4gICAgb25JbnZva2VUYXNrKFxuICAgICAgICBwYXJlbnRab25lRGVsZWdhdGU6IFpvbmVEZWxlZ2F0ZSwgY3VycmVudFpvbmU6IFpvbmUsIHRhcmdldFpvbmU6IFpvbmUsIHRhc2s6IFRhc2ssXG4gICAgICAgIGFwcGx5VGhpczogYW55LCBhcHBseUFyZ3M6IGFueVtdKTogYW55IHtcbiAgICAgIGNvbnN0IHNvdXJjZSA9IHRhc2suc291cmNlO1xuICAgICAgbGV0IHNjb3BlID0gV3RmWm9uZVNwZWMuaW52b2tlVGFza1Njb3BlW3NvdXJjZV07XG4gICAgICBpZiAoIXNjb3BlKSB7XG4gICAgICAgIHNjb3BlID0gV3RmWm9uZVNwZWMuaW52b2tlVGFza1Njb3BlW3NvdXJjZV0gPVxuICAgICAgICAgICAgd3RmRXZlbnRzLmNyZWF0ZVNjb3BlKGBab25lOmludm9rZVRhc2s6JHtzb3VyY2V9KGFzY2lpIHpvbmUpYCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gd3RmVHJhY2UubGVhdmVTY29wZShcbiAgICAgICAgICBzY29wZSh6b25lUGF0aE5hbWUodGFyZ2V0Wm9uZSkpLFxuICAgICAgICAgIHBhcmVudFpvbmVEZWxlZ2F0ZS5pbnZva2VUYXNrKHRhcmdldFpvbmUsIHRhc2ssIGFwcGx5VGhpcywgYXBwbHlBcmdzKSk7XG4gICAgfVxuXG4gICAgb25DYW5jZWxUYXNrKHBhcmVudFpvbmVEZWxlZ2F0ZTogWm9uZURlbGVnYXRlLCBjdXJyZW50Wm9uZTogWm9uZSwgdGFyZ2V0Wm9uZTogWm9uZSwgdGFzazogVGFzayk6XG4gICAgICAgIGFueSB7XG4gICAgICBjb25zdCBrZXkgPSB0YXNrLnNvdXJjZTtcbiAgICAgIGxldCBpbnN0YW5jZSA9IFd0ZlpvbmVTcGVjLmNhbmNlbEluc3RhbmNlW2tleV07XG4gICAgICBpZiAoIWluc3RhbmNlKSB7XG4gICAgICAgIGluc3RhbmNlID0gV3RmWm9uZVNwZWMuY2FuY2VsSW5zdGFuY2Vba2V5XSA9XG4gICAgICAgICAgICB3dGZFdmVudHMuY3JlYXRlSW5zdGFuY2UoYFpvbmU6Y2FuY2VsOiR7a2V5fShhc2NpaSB6b25lLCBhbnkgb3B0aW9ucylgKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHJldFZhbHVlID0gcGFyZW50Wm9uZURlbGVnYXRlLmNhbmNlbFRhc2sodGFyZ2V0Wm9uZSwgdGFzayk7XG4gICAgICBpbnN0YW5jZSh6b25lUGF0aE5hbWUodGFyZ2V0Wm9uZSksIHNoYWxsb3dPYmoodGFzay5kYXRhLCAyKSk7XG4gICAgICByZXR1cm4gcmV0VmFsdWU7XG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNoYWxsb3dPYmoob2JqOiB7W2s6IHN0cmluZ106IGFueX0sIGRlcHRoOiBudW1iZXIpOiBhbnkge1xuICAgIGlmICghZGVwdGgpIHJldHVybiBudWxsO1xuICAgIGNvbnN0IG91dDoge1trOiBzdHJpbmddOiBhbnl9ID0ge307XG4gICAgZm9yIChjb25zdCBrZXkgaW4gb2JqKSB7XG4gICAgICBpZiAob2JqLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgbGV0IHZhbHVlID0gb2JqW2tleV07XG4gICAgICAgIHN3aXRjaCAodHlwZW9mIHZhbHVlKSB7XG4gICAgICAgICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgICAgICAgIGNvbnN0IG5hbWUgPSB2YWx1ZSAmJiB2YWx1ZS5jb25zdHJ1Y3RvciAmJiAoPGFueT52YWx1ZS5jb25zdHJ1Y3RvcikubmFtZTtcbiAgICAgICAgICAgIHZhbHVlID0gbmFtZSA9PSAoPGFueT5PYmplY3QpLm5hbWUgPyBzaGFsbG93T2JqKHZhbHVlLCBkZXB0aCAtIDEpIDogbmFtZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2Z1bmN0aW9uJzpcbiAgICAgICAgICAgIHZhbHVlID0gdmFsdWUubmFtZSB8fCB1bmRlZmluZWQ7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBvdXRba2V5XSA9IHZhbHVlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gb3V0O1xuICB9XG5cbiAgZnVuY3Rpb24gem9uZVBhdGhOYW1lKHpvbmU6IFpvbmUpIHtcbiAgICBsZXQgbmFtZTogc3RyaW5nID0gem9uZS5uYW1lO1xuICAgIHpvbmUgPSB6b25lLnBhcmVudDtcbiAgICB3aGlsZSAoem9uZSAhPSBudWxsKSB7XG4gICAgICBuYW1lID0gem9uZS5uYW1lICsgJzo6JyArIG5hbWU7XG4gICAgICB6b25lID0gem9uZS5wYXJlbnQ7XG4gICAgfVxuICAgIHJldHVybiBuYW1lO1xuICB9XG5cbiAgKFpvbmUgYXMgYW55KVsnd3RmWm9uZVNwZWMnXSA9ICF3dGZFbmFibGVkID8gbnVsbCA6IG5ldyBXdGZab25lU3BlYygpO1xufSkodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcgJiYgd2luZG93IHx8IHR5cGVvZiBzZWxmID09PSAnb2JqZWN0JyAmJiBzZWxmIHx8IGdsb2JhbCk7XG4iXX0=