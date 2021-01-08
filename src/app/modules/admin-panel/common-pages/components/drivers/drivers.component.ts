import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';
import {ContentserviceService} from '../../../../../_services/contentservice.service';
import {CommonService} from '../../../../../_services/common.service';

declare var $: any;
const ELEMENT_DATA: any[] = [
    {categoryNameEng: 'Category 1', categoryNameArbic: 'Category 1', image: 'assets/images/home-food.png', action: ''},
];

@Component({
    selector: 'app-drivers',
    templateUrl: './drivers.component.html',
    styleUrls: ['./drivers.component.css']
})
export class DriversComponent implements OnInit {

    displayedColumns: string[] = ['select', 'name', 'email', 'image', 'accountStatus', 'phoneNumber', 'drivingLiceneceNumber', 'action'];
    userDetails: any;
    loader: boolean = false;
    dataSource = new MatTableDataSource<any>(ELEMENT_DATA);
    selection = new SelectionModel<any>(true, []);
    @ViewChild(MatSort, {static: false}) sort: MatSort;
    @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

    constructor(private contentService: ContentserviceService, private commonSrvc: CommonService) {
    }

    /** Whether the number of selected elements matches the total number of rows. */
    isAllSelected() {
        const numSelected = this.selection.selected.length;
        const numRows = this.dataSource.data.length;
        return numSelected === numRows;
    }

    masterToggle() {
        this.isAllSelected() ?
            this.selection.clear() :
            this.dataSource.data.forEach(row => this.selection.select(row));
    }

    applyFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }

    ngOnInit() {
        this.getDrivers();
        this.dataSource.paginator = this.paginator;
    }

    getDrivers() {
        this.loader = true;
        this.contentService.getDriver().subscribe(res => {
            this.dataSource.data = res['data'];
            console.log('drivers res', res['data']);
            this.loader = false;
        });
    }

    viewDetails(elem) {
        this.userDetails = elem;
    }
}
