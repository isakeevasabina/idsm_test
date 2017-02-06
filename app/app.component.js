function Item(surname, rating, done) {
    this.surname = surname;
    this.rating = rating;
    this.done = done;
}

var AppComponent = ng.core.Component({
    selector: 'my-app',
    template:  `<div class="page-header">
        <h1> Неправильный список </h1>
    </div>
    <div class="panel">
        <div class="form-inline">
            <div class="form-group">
                <div class="col-md-8">
                    <input class="form-control" [(ngModel)]="text" placeholder = "Фамилия" />
                </div>
            </div>
            <div class="form-group">
                <div class="col-md-6">
                    <input type="number" class="form-control" [(ngModel)]="rating" placeholder="Оценка" />
                </div>
            </div>
            <div class="form-group">
                <div class="col-md-offset-2 col-md-8">
                    <button class="btn btn-default" (click)="addItem(text, rating)">Добавить</button>
                </div>
            </div>
        </div>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>Фамилия</th>
                    <th>Оценка</th>
                    <th><button class="btn btn-default">Удалить</button></th>
                </tr>
            </thead>
            <tbody>
                <tr *ngFor="let item of items">
                    <td>{{item.surname}}</td>
                    <td>{{item.rating}}</td>
                    <td><input type="checkbox" [(ngModel)]="item.done" /></td>
                </tr>
            </tbody>
        </table>
    </div>`
})
    .Class({
        constructor: function() {

            this.items= [
                new Item("Иванов",5),
                new Item("Петров",4),
                new Item("Сидоров",3)
            ];
        }
    });

AppComponent.prototype.addItem = function (text, rating) {
    if (text == null || text == undefined || text.trim() == "")
        return;
    if (rating == null || rating == undefined || rating < 1 || rating > 5)
        return;
    this.items.push(new Item(text, rating));
};