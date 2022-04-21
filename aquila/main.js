(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Nickinfame\Desktop\Aquila Gladiatrix\Aquila\src\main.ts */"zUnb");


/***/ }),

/***/ "3dBE":
/*!************************************************************!*\
  !*** ./src/app/confirm-dialog/confirm-dialog.component.ts ***!
  \************************************************************/
/*! exports provided: ConfirmDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmDialogComponent", function() { return ConfirmDialogComponent; });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



class ConfirmDialogComponent {
    constructor(data, dialogRef) {
        this.dialogRef = dialogRef;
        this.message = data.message;
    }
    ngOnInit() { }
    perform() {
        this.dialogRef.close(true);
    }
    cancel() {
        this.dialogRef.close(false);
    }
}
ConfirmDialogComponent.ɵfac = function ConfirmDialogComponent_Factory(t) { return new (t || ConfirmDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogRef"])); };
ConfirmDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ConfirmDialogComponent, selectors: [["app-confirm-dialog"]], decls: 8, vars: 1, consts: [[1, "btn-group"], [1, "btn", 3, "click"]], template: function ConfirmDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ConfirmDialogComponent_Template_button_click_4_listener() { return ctx.cancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ConfirmDialogComponent_Template_button_click_6_listener() { return ctx.perform(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Confirm");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.message, " ");
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb25maXJtLWRpYWxvZy5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "7kv/":
/*!******************************************!*\
  !*** ./src/app/score/score.component.ts ***!
  \******************************************/
/*! exports provided: ScoreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScoreComponent", function() { return ScoreComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");


function ScoreComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScoreComponent_div_1_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.add(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScoreComponent_div_1_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.remove(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "remove");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r0.fencer.score === 0);
} }
function ScoreComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScoreComponent_div_7_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.add(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "add");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScoreComponent_div_7_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.remove(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "remove");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r1.fencer.score === 0);
} }
const _c0 = function (a0, a1) { return { "blue-fencer": a0, "yellow-fencer": a1 }; };
class ScoreComponent {
    constructor() { }
    ngOnInit() { }
    // Operations
    add() {
        this.fencer.score++;
    }
    remove() {
        this.fencer.score--;
    }
}
ScoreComponent.ɵfac = function ScoreComponent_Factory(t) { return new (t || ScoreComponent)(); };
ScoreComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ScoreComponent, selectors: [["aquila-fencer-score"]], inputs: { color: "color", position: "position", fencer: "fencer" }, decls: 8, vars: 8, consts: [[1, "row"], ["class", "col-2 btn-group-vertical", 4, "ngIf"], [1, "score-viewer", "col-10"], [1, "fencer", "noselect", "score-text", 3, "ngClass"], [1, "noselect"], [1, "col-2", "btn-group-vertical"], [1, "btn", 3, "click"], [1, "material-icons"], [1, "btn", 3, "disabled", "click"]], template: function ScoreComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ScoreComponent_div_1_Template, 7, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ScoreComponent_div_7_Template, 7, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.position === "left");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](5, _c0, ctx.color === "blue", ctx.color === "yellow"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.fencer.score, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.fencer.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.position === "right");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]], styles: [".fencer[_ngcontent-%COMP%] {\r\n\t\r\n\talign-self: center;\r\n}\r\n\r\n.blue-fencer[_ngcontent-%COMP%] {\r\n\tcolor: #0098ff;\r\n}\r\n\r\n.yellow-fencer[_ngcontent-%COMP%] {\r\n\tcolor: #ff9800;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjb3JlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxvQkFBb0I7Q0FDcEIsa0JBQWtCO0FBQ25COztBQUVBO0NBQ0MsY0FBYztBQUNmOztBQUVBO0NBQ0MsY0FBYztBQUNmIiwiZmlsZSI6InNjb3JlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmVuY2VyIHtcclxuXHQvKmZvbnQtc2l6ZTogNDI1cHg7Ki9cclxuXHRhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5ibHVlLWZlbmNlciB7XHJcblx0Y29sb3I6ICMwMDk4ZmY7XHJcbn1cclxuXHJcbi55ZWxsb3ctZmVuY2VyIHtcclxuXHRjb2xvcjogI2ZmOTgwMDtcclxufSJdfQ== */"] });


/***/ }),

/***/ "AOm2":
/*!******************************************!*\
  !*** ./src/app/timer/timer.component.ts ***!
  \******************************************/
/*! exports provided: TimerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimerComponent", function() { return TimerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../confirm-dialog/confirm-dialog.component */ "3dBE");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function TimerComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", ctx_r0.minutes, " : ", ctx_r0.seconds, " : ", ctx_r0.millis, " ");
} }
function TimerComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TimerComponent_div_3_Template_span_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.toggle(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", ctx_r1.minutes, " : ", ctx_r1.seconds, " . ", ctx_r1.millis, " ");
} }
function TimerComponent_span_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "pause");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TimerComponent_span_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "play_arrow");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class TimerComponent {
    constructor(dialog) {
        this.dialog = dialog;
        // Events
        this.expire = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        // Configurations
        this.MIN_1 = 60000;
        this.MIN_2 = 120000;
        this.MIN_3 = 180000;
        this.SEC_1 = 1000;
        this.SEC_3 = 3000;
        this.SEC_5 = 5000;
        this.TEST = 100;
        this.SIG_DUR = 10000; // Duration of audio signal
    }
    ngOnInit() {
        this.timer = this.MIN_2; // Default 2min
        this.reset();
        setInterval(() => { this.timerCallback(); }, 100);
    }
    timerCallback() {
        if (!this.paused && this.remaining > 0) {
            this.remaining -= 100;
            this.render();
        }
        if (this.minutes === '0' && this.seconds === '00' && this.millis === '0') {
            this.paused = true;
            if (!this.expiredLock) {
                this.expireCallback();
            }
        }
    }
    render() {
        let minutesTime = Math.floor(this.remaining / this.MIN_1);
        let secondsTime = Math.floor((this.remaining / this.SEC_1) % 60);
        let millisTime = this.remaining % 1000;
        this.minutes = '' + minutesTime;
        this.seconds = '' + ((secondsTime < 10) ? '0' + secondsTime : secondsTime);
        this.millis = '' + (millisTime / 100);
    }
    addTime(millis) {
        this.remaining += millis;
        this.render();
        this.expiredLock = false;
    }
    removeTime(millis) {
        if (this.remaining >= millis)
            this.remaining -= millis;
        else
            this.remaining = 0;
        this.render();
    }
    reset() {
        console.warn('Timer Reset');
        this.expiredLock = false;
        this.paused = true;
        this.remaining = this.timer;
        this.render();
    }
    setTimer(timer) {
        const dialogRef = this.dialog.open(_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_1__["ConfirmDialogComponent"], { data: { message: "Do you want to reset the timer?" } });
        dialogRef.afterClosed().subscribe((res) => {
            if (res) {
                this.timer = timer;
                this.reset();
            }
        }, (err) => { });
    }
    toggle() {
        this.paused = !this.paused;
    }
    expireCallback() {
        this.expiredLock = true;
        this.expire.emit();
    }
    keyToggle(event) {
        //console.warn("CODE: " + event.keyCode)
        if (event.keyCode === 32)
            event.preventDefault();
        this.toggle();
    }
}
TimerComponent.ɵfac = function TimerComponent_Factory(t) { return new (t || TimerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"])); };
TimerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TimerComponent, selectors: [["aquila-timer"]], hostBindings: function TimerComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function TimerComponent_keyup_HostBindingHandler($event) { return ctx.keyToggle($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, outputs: { expire: "expire" }, decls: 26, vars: 5, consts: [[1, "container-fluid", "timer-component"], [1, "row"], ["class", "col noselect", 4, "ngIf"], [1, "col"], [1, "btn-group"], [1, "btn", 3, "click"], [1, "material-icons"], [1, "btn", 3, "disabled", "click"], ["class", "material-icons", 4, "ngIf"], [1, "col", "noselect"], [1, "timer", "timer-text"], [1, "timer", "timer-text", 3, "click"]], template: function TimerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TimerComponent_div_2_Template, 3, 3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TimerComponent_div_3_Template, 3, 3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TimerComponent_Template_button_click_7_listener() { return ctx.setTimer(ctx.MIN_1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " 1m ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TimerComponent_Template_button_click_9_listener() { return ctx.setTimer(ctx.MIN_2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " 2m ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TimerComponent_Template_button_click_11_listener() { return ctx.setTimer(ctx.MIN_3); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " 3m ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TimerComponent_Template_button_click_13_listener() { return ctx.addTime(ctx.SEC_5); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " +5s ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TimerComponent_Template_button_click_15_listener() { return ctx.addTime(ctx.SEC_1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " +1s ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TimerComponent_Template_button_click_17_listener() { return ctx.removeTime(ctx.SEC_1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " -1s ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TimerComponent_Template_button_click_19_listener() { return ctx.setTimer(ctx.timer); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "restore");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TimerComponent_Template_button_click_22_listener() { return ctx.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, TimerComponent_span_23_Template, 2, 0, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, TimerComponent_span_24_Template, 2, 0, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.minutes === "0" && ctx.seconds === "00" && ctx.millis === "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(ctx.minutes === "0" && ctx.seconds === "00" && ctx.millis === "0"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.minutes === "0" && ctx.seconds === "00" && ctx.millis === "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.paused);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.paused);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: [".timer-component[_ngcontent-%COMP%] {\r\n\talign-content: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRpbWVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxxQkFBcUI7QUFDdEI7QUFDQTs7O0VBR0UiLCJmaWxlIjoidGltZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aW1lci1jb21wb25lbnQge1xyXG5cdGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4vKlxyXG4udGltZXIge1xyXG5cdGZvbnQtc2l6ZTogMzUwcHg7XHJcbn0qLyJdfQ== */"] });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "E3Wl":
/*!******************************************!*\
  !*** ./src/app/cards/cards.component.ts ***!
  \******************************************/
/*! exports provided: CardsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardsComponent", function() { return CardsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class CardsComponent {
    constructor() { }
    ngOnInit() { }
    addYCard() {
        this.fencer.yCards++;
    }
    removeYCard() {
        this.fencer.yCards--;
    }
    addRCard() {
        this.fencer.rCards++;
    }
    removeRCard() {
        this.fencer.rCards--;
    }
}
CardsComponent.ɵfac = function CardsComponent_Factory(t) { return new (t || CardsComponent)(); };
CardsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CardsComponent, selectors: [["aquila-fencer-cards"]], inputs: { fencer: "fencer" }, decls: 29, vars: 4, consts: [[1, "container-fluid"], [1, "row"], [1, "col-2"], [1, "card-text"], [1, "material-icons", "penalty-card", "red-card", "card-text"], [1, "col"], [1, "btn-group-vertical", "red-action-group"], [1, "btn", 3, "click"], [1, "material-icons"], [1, "btn", 3, "disabled", "click"], [1, "btn-group-vertical", "yellow-action-group"], [1, "material-icons", "penalty-card", "yellow-card", "card-text"]], template: function CardsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "style");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CardsComponent_Template_button_click_10_listener() { return ctx.addRCard(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CardsComponent_Template_button_click_13_listener() { return ctx.removeRCard(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "remove");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CardsComponent_Template_button_click_17_listener() { return ctx.addYCard(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CardsComponent_Template_button_click_20_listener() { return ctx.removeYCard(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "remove");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "style");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.fencer.rCards, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.fencer.rCards === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.fencer.yCards === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.fencer.yCards, " ");
    } }, styles: [".yellow-card[_ngcontent-%COMP%] {\r\n\tcolor: #ffcd00;\r\n}\r\n\r\n.red-card[_ngcontent-%COMP%] {\r\n\tcolor: #ff0000;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcmRzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUU7O0FBRUY7Q0FDQyxjQUFjO0FBQ2Y7O0FBRUE7Q0FDQyxjQUFjO0FBQ2Y7O0FBR0E7Ozs7O0VBS0UiLCJmaWxlIjoiY2FyZHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qLnBlbmFsdHktY2FyZCB7XHJcblx0Zm9udC1zaXplOiA1MHB4O1xyXG59Ki9cclxuXHJcbi55ZWxsb3ctY2FyZCB7XHJcblx0Y29sb3I6ICNmZmNkMDA7XHJcbn1cclxuXHJcbi5yZWQtY2FyZCB7XHJcblx0Y29sb3I6ICNmZjAwMDA7XHJcbn1cclxuXHJcblxyXG4vKi55ZWxsb3ctYWN0aW9uLWdyb3VwIHtcclxuXHRtYXJnaW4tbGVmdDogMTBweDtcclxufVxyXG4ucmVkLWFjdGlvbi1ncm91cCB7XHJcblx0bWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59Ki8iXX0= */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var src_models_match__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/models/match */ "tNar");
/* harmony import */ var _timer_timer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./timer/timer.component */ "AOm2");
/* harmony import */ var _confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./confirm-dialog/confirm-dialog.component */ "3dBE");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _visual_alert_visual_alert_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./visual-alert/visual-alert.component */ "poxx");
/* harmony import */ var _fencer_fencer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./fencer/fencer.component */ "mLob");
/* harmony import */ var _doubles_doubles_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./doubles/doubles.component */ "q9qM");











function AppComponent_aquila_visual_alert_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "aquila-visual-alert");
} }
function AppComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "aquila-fencer", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "aquila-doubles", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "aquila-fencer", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("fencer", ctx_r1.match.blue);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("match", ctx_r1.match);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("fencer", ctx_r1.match.yellow);
} }
class AppComponent {
    constructor(dialog) {
        this.dialog = dialog;
        this.signal = new Audio('assets/audio/match_end.mp3');
        this.SIG_DUR = 5000; // Duration of audio signal (default 5s)
        this.match = new src_models_match__WEBPACK_IMPORTED_MODULE_0__["Match"]();
    }
    ngOnInit() {
        this.showAlert = false;
        this.signal.loop = true;
    }
    displayAlert() {
        console.error('expired');
        this.signal.currentTime = 0;
        this.signal.play();
        this.showAlert = true;
        setTimeout(() => {
            this.signal.pause();
            this.showAlert = false;
        }, this.SIG_DUR);
    }
    reset() {
        let dialogRef = this.dialog.open(_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_2__["ConfirmDialogComponent"], { data: { message: 'Do you want to reset the match?' } });
        dialogRef.afterClosed().subscribe((res) => {
            if (res) {
                this.match = new src_models_match__WEBPACK_IMPORTED_MODULE_0__["Match"]();
                this.timer.reset();
            }
        }, (err) => { });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["aquila-root"]], viewQuery: function AppComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_timer_timer_component__WEBPACK_IMPORTED_MODULE_1__["TimerComponent"], 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.timer = _t.first);
    } }, decls: 8, vars: 3, consts: [[4, "ngIf"], [1, "container-fluid", 3, "hidden"], ["class", "row", 4, "ngIf"], [1, "row"], [1, "col", 3, "expire"], ["mat-fab", "", "color", "primary", 1, "reset", 3, "click"], [1, "material-icons"], [1, "col-md-4"], ["color", "blue", "align", "right", 3, "fencer"], [1, "col-md-4", "doubles"], [3, "match"], ["color", "yellow", "align", "left", 3, "fencer"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, AppComponent_aquila_visual_alert_0_Template, 1, 0, "aquila-visual-alert", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, AppComponent_div_2_Template, 7, 3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "aquila-timer", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("expire", function AppComponent_Template_aquila_timer_expire_4_listener() { return ctx.displayAlert(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppComponent_Template_button_click_5_listener() { return ctx.reset(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "restart_alt");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showAlert);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("hidden", ctx.showAlert);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.match);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _timer_timer_component__WEBPACK_IMPORTED_MODULE_1__["TimerComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _visual_alert_visual_alert_component__WEBPACK_IMPORTED_MODULE_7__["VisualAlertComponent"], _fencer_fencer_component__WEBPACK_IMPORTED_MODULE_8__["FencerComponent"], _doubles_doubles_component__WEBPACK_IMPORTED_MODULE_9__["DoublesComponent"]], styles: [".reset[_ngcontent-%COMP%] {\r\n\tposition: fixed;\r\n\tright: 16px;\r\n\tbottom: 16px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsZUFBZTtDQUNmLFdBQVc7Q0FDWCxZQUFZO0FBQ2IiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVzZXQge1xyXG5cdHBvc2l0aW9uOiBmaXhlZDtcclxuXHRyaWdodDogMTZweDtcclxuXHRib3R0b206IDE2cHg7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "Tn/X":
/*!******************************!*\
  !*** ./src/models/fencer.ts ***!
  \******************************/
/*! exports provided: Fencer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Fencer", function() { return Fencer; });
class Fencer {
    constructor(name, score = 0, yCards = 0, rCards = 0) {
        this.name = name;
        this.score = score;
        this.yCards = yCards;
        this.rCards = rCards;
    }
}


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _cards_cards_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cards/cards.component */ "E3Wl");
/* harmony import */ var _timer_timer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./timer/timer.component */ "AOm2");
/* harmony import */ var _confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./confirm-dialog/confirm-dialog.component */ "3dBE");
/* harmony import */ var _score_score_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./score/score.component */ "7kv/");
/* harmony import */ var _visual_alert_visual_alert_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./visual-alert/visual-alert.component */ "poxx");
/* harmony import */ var _fencer_fencer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./fencer/fencer.component */ "mLob");
/* harmony import */ var _doubles_doubles_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./doubles/doubles.component */ "q9qM");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./material/material.module */ "hctd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ "fXoL");












class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["NoopAnimationsModule"],
            _material_material_module__WEBPACK_IMPORTED_MODULE_10__["MaterialModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"],
        _cards_cards_component__WEBPACK_IMPORTED_MODULE_3__["CardsComponent"],
        _timer_timer_component__WEBPACK_IMPORTED_MODULE_4__["TimerComponent"],
        _confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_5__["ConfirmDialogComponent"],
        _score_score_component__WEBPACK_IMPORTED_MODULE_6__["ScoreComponent"],
        _visual_alert_visual_alert_component__WEBPACK_IMPORTED_MODULE_7__["VisualAlertComponent"],
        _fencer_fencer_component__WEBPACK_IMPORTED_MODULE_8__["FencerComponent"],
        _doubles_doubles_component__WEBPACK_IMPORTED_MODULE_9__["DoublesComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["NoopAnimationsModule"],
        _material_material_module__WEBPACK_IMPORTED_MODULE_10__["MaterialModule"]] }); })();


/***/ }),

/***/ "hctd":
/*!*********************************************!*\
  !*** ./src/app/material/material.module.ts ***!
  \*********************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




class MaterialModule {
}
MaterialModule.ɵfac = function MaterialModule_Factory(t) { return new (t || MaterialModule)(); };
MaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: MaterialModule });
MaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](MaterialModule, { exports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"]] }); })();


/***/ }),

/***/ "mLob":
/*!********************************************!*\
  !*** ./src/app/fencer/fencer.component.ts ***!
  \********************************************/
/*! exports provided: FencerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FencerComponent", function() { return FencerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _score_score_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../score/score.component */ "7kv/");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _cards_cards_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cards/cards.component */ "E3Wl");




function FencerComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 6);
} }
function FencerComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 6);
} }
class FencerComponent {
    constructor() { }
    ngOnInit() { }
}
FencerComponent.ɵfac = function FencerComponent_Factory(t) { return new (t || FencerComponent)(); };
FencerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FencerComponent, selectors: [["aquila-fencer"]], inputs: { fencer: "fencer", fencerColor: ["color", "fencerColor"], align: "align" }, decls: 9, vars: 6, consts: [[1, "container-fluid"], [1, "row"], [1, "col"], [3, "color", "position", "fencer"], ["class", "col-2", 4, "ngIf"], [3, "fencer"], [1, "col-2"]], template: function FencerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "aquila-fencer-score", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, FencerComponent_div_5_Template, 1, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "aquila-fencer-cards", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, FencerComponent_div_8_Template, 1, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx.fencerColor)("position", ctx.align)("fencer", ctx.fencer);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.align === "left");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fencer", ctx.fencer);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.align === "right");
    } }, directives: [_score_score_component__WEBPACK_IMPORTED_MODULE_1__["ScoreComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _cards_cards_component__WEBPACK_IMPORTED_MODULE_3__["CardsComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmZW5jZXIuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "poxx":
/*!********************************************************!*\
  !*** ./src/app/visual-alert/visual-alert.component.ts ***!
  \********************************************************/
/*! exports provided: VisualAlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisualAlertComponent", function() { return VisualAlertComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class VisualAlertComponent {
    constructor() { }
    ngOnInit() { }
}
VisualAlertComponent.ɵfac = function VisualAlertComponent_Factory(t) { return new (t || VisualAlertComponent)(); };
VisualAlertComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VisualAlertComponent, selectors: [["aquila-visual-alert"]], decls: 1, vars: 0, consts: [[1, "visual-alert"]], template: function VisualAlertComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
    } }, styles: [".visual-alert[_ngcontent-%COMP%] {\r\n\t\r\n\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\r\n\tbackground-color: chartreuse;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpc3VhbC1hbGVydC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0M7Y0FDYTs7Q0FFYixXQUFXO0NBQ1gsWUFBWTs7Q0FFWiw0QkFBNEI7QUFDN0IiLCJmaWxlIjoidmlzdWFsLWFsZXJ0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudmlzdWFsLWFsZXJ0IHtcclxuXHQvKnBvc2l0aW9uOiBmaXhlZDtcclxuXHRtYXJnaW46IDBweDsqL1xyXG5cclxuXHR3aWR0aDogMTAwJTtcclxuXHRoZWlnaHQ6IDEwMCU7XHJcblxyXG5cdGJhY2tncm91bmQtY29sb3I6IGNoYXJ0cmV1c2U7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "q9qM":
/*!**********************************************!*\
  !*** ./src/app/doubles/doubles.component.ts ***!
  \**********************************************/
/*! exports provided: DoublesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoublesComponent", function() { return DoublesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class DoublesComponent {
    constructor() { }
    ngOnInit() { }
    add() {
        this.match.doubles++;
    }
    remove() {
        this.match.doubles--;
    }
}
DoublesComponent.ɵfac = function DoublesComponent_Factory(t) { return new (t || DoublesComponent)(); };
DoublesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DoublesComponent, selectors: [["aquila-doubles"]], inputs: { match: "match" }, decls: 16, vars: 2, consts: [[1, "container-fluid"], [1, "row"], [1, "col"], [1, "counter", "noselect", "doubles-text"], [1, "btn-group"], [1, "btn", 3, "disabled", "click"], [1, "material-icons"], [1, "btn", 3, "click"]], template: function DoublesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DoublesComponent_Template_button_click_9_listener() { return ctx.remove(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "remove");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DoublesComponent_Template_button_click_12_listener() { return ctx.add(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.match.doubles, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.match.doubles === 0);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRvdWJsZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRSIsImZpbGUiOiJkb3VibGVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKi5jb3VudGVyIHtcclxuXHRmb250LXNpemU6IDIwMHB4O1xyXG59Ki8iXX0= */"] });


/***/ }),

/***/ "tNar":
/*!*****************************!*\
  !*** ./src/models/match.ts ***!
  \*****************************/
/*! exports provided: Match */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Match", function() { return Match; });
/* harmony import */ var _fencer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fencer */ "Tn/X");

class Match {
    constructor(blueName, blueScore = 0, blueYCards = 0, blueRCards = 0, doubles = 0, yellowName, yellowScore = 0, yellowYCards = 0, yellowRCards = 0) {
        this.blue = new _fencer__WEBPACK_IMPORTED_MODULE_0__["Fencer"](blueName, blueScore, blueYCards, blueRCards);
        this.doubles = doubles;
        this.yellow = new _fencer__WEBPACK_IMPORTED_MODULE_0__["Fencer"](yellowName, yellowScore, yellowYCards, yellowRCards);
    }
}


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map