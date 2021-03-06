"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MapPolyfill = (function () {
    function MapPolyfill() {
        this.size = 0;
        this._values = [];
        this._keys = [];
    }
    MapPolyfill.prototype.get = function (key) {
        var i = this._keys.indexOf(key);
        return i === -1 ? undefined : this._values[i];
    };
    MapPolyfill.prototype.set = function (key, value) {
        var i = this._keys.indexOf(key);
        if (i === -1) {
            this._keys.push(key);
            this._values.push(value);
            this.size++;
        }
        else {
            this._values[i] = value;
        }
        return this;
    };
    MapPolyfill.prototype.delete = function (key) {
        var i = this._keys.indexOf(key);
        if (i === -1) {
            return false;
        }
        this._values.splice(i, 1);
        this._keys.splice(i, 1);
        this.size--;
        return true;
    };
    MapPolyfill.prototype.clear = function () {
        this._keys.length = 0;
        this._values.length = 0;
        this.size = 0;
    };
    MapPolyfill.prototype.forEach = function (cb, thisArg) {
        for (var i = 0; i < this.size; i++) {
            cb.call(thisArg, this._values[i], this._keys[i]);
        }
    };
    return MapPolyfill;
}());
exports.MapPolyfill = MapPolyfill;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWFwUG9seWZpbGwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJNYXBQb2x5ZmlsbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBO0lBQUE7UUFDUyxTQUFJLEdBQUcsQ0FBQyxDQUFDO1FBQ1IsWUFBTyxHQUFVLEVBQUUsQ0FBQztRQUNwQixVQUFLLEdBQVUsRUFBRSxDQUFDO0lBdUM1QixDQUFDO0lBckNDLHlCQUFHLEdBQUgsVUFBSSxHQUFRO1FBQ1YsSUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDbEMsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxTQUFTLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBRUQseUJBQUcsR0FBSCxVQUFJLEdBQVEsRUFBRSxLQUFVO1FBQ3RCLElBQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2xDLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDYixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNyQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN6QixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDZCxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQztRQUMxQixDQUFDO1FBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNkLENBQUM7SUFFRCw0QkFBTSxHQUFOLFVBQU8sR0FBUTtRQUNiLElBQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2xDLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFBQyxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQUMsQ0FBQztRQUMvQixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDMUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNaLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQsMkJBQUssR0FBTDtRQUNFLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUN0QixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUM7SUFDaEIsQ0FBQztJQUVELDZCQUFPLEdBQVAsVUFBUSxFQUFZLEVBQUUsT0FBWTtRQUNoQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUNuQyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNuRCxDQUFDO0lBQ0gsQ0FBQztJQUNILGtCQUFDO0FBQUQsQ0FBQyxBQTFDRCxJQTBDQztBQTFDWSxrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBNYXBQb2x5ZmlsbCB7XG4gIHB1YmxpYyBzaXplID0gMDtcbiAgcHJpdmF0ZSBfdmFsdWVzOiBhbnlbXSA9IFtdO1xuICBwcml2YXRlIF9rZXlzOiBhbnlbXSA9IFtdO1xuXG4gIGdldChrZXk6IGFueSkge1xuICAgIGNvbnN0IGkgPSB0aGlzLl9rZXlzLmluZGV4T2Yoa2V5KTtcbiAgICByZXR1cm4gaSA9PT0gLTEgPyB1bmRlZmluZWQgOiB0aGlzLl92YWx1ZXNbaV07XG4gIH1cblxuICBzZXQoa2V5OiBhbnksIHZhbHVlOiBhbnkpIHtcbiAgICBjb25zdCBpID0gdGhpcy5fa2V5cy5pbmRleE9mKGtleSk7XG4gICAgaWYgKGkgPT09IC0xKSB7XG4gICAgICB0aGlzLl9rZXlzLnB1c2goa2V5KTtcbiAgICAgIHRoaXMuX3ZhbHVlcy5wdXNoKHZhbHVlKTtcbiAgICAgIHRoaXMuc2l6ZSsrO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl92YWx1ZXNbaV0gPSB2YWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBkZWxldGUoa2V5OiBhbnkpOiBib29sZWFuIHtcbiAgICBjb25zdCBpID0gdGhpcy5fa2V5cy5pbmRleE9mKGtleSk7XG4gICAgaWYgKGkgPT09IC0xKSB7IHJldHVybiBmYWxzZTsgfVxuICAgIHRoaXMuX3ZhbHVlcy5zcGxpY2UoaSwgMSk7XG4gICAgdGhpcy5fa2V5cy5zcGxpY2UoaSwgMSk7XG4gICAgdGhpcy5zaXplLS07XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBjbGVhcigpOiB2b2lkIHtcbiAgICB0aGlzLl9rZXlzLmxlbmd0aCA9IDA7XG4gICAgdGhpcy5fdmFsdWVzLmxlbmd0aCA9IDA7XG4gICAgdGhpcy5zaXplID0gMDtcbiAgfVxuXG4gIGZvckVhY2goY2I6IEZ1bmN0aW9uLCB0aGlzQXJnOiBhbnkpOiB2b2lkIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc2l6ZTsgaSsrKSB7XG4gICAgICBjYi5jYWxsKHRoaXNBcmcsIHRoaXMuX3ZhbHVlc1tpXSwgdGhpcy5fa2V5c1tpXSk7XG4gICAgfVxuICB9XG59Il19