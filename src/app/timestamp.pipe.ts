import { Pipe, PipeTransform, ChangeDetectorRef, NgZone, OnDestroy, OnInit } from '@angular/core';

@Pipe({
	name: 'timestamp',
	pure: false
})
export class TimestampPipe implements PipeTransform {
	private timer: number;
	constructor(private ChangeDetectorRef: ChangeDetectorRef, private NgZone: NgZone) {

	}
	transform(value: any): any {
		let seconds = value;
		let minutes = Math.round(Math.abs(seconds / 60));
		let hours = Math.round(Math.abs(minutes / 60));
		let days = Math.round(Math.abs(hours / 24));
		let months = Math.round(Math.abs(days / 30.416));
		let years = Math.round(Math.abs(days / 365));
		if (Number.isNaN(seconds)) {
			return '';
		} else if (seconds <= 45) {
			return 'a few seconds ago';
		} else if (seconds <= 60) {
			return 'a minute ago';
		} else if (minutes <= 45) {
			return minutes + ' minutes ago';
		} else if (minutes <= 90) {
			return 'an hour ago';
		} else if (hours <= 24) {
			return hours + ' hours ago';
		} else if (hours <= 36) {
			return 'a day ago';
		} else if (days <= 25) {
			return days + ' days ago';
		} else if (days <= 45) {
			return 'a month ago';
		} else if (days <= 345) {
			return months + ' months ago';
		} else if (days <= 545) {
			return 'a year ago';
		} else {
			return years + ' years ago';
		}
	}

	ngOnInit() {

	}
}
