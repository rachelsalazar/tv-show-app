import { ITvService } from './tv.service';
import { ITvShow } from '../itv-show';
import { of } from 'rxjs';

export class TvServiceFake implements ITvService{
    private fakeShow: ITvShow = {
        name: 'Friends',
        image: '',
        description: 'Show about friends',
        schedule: 'Mondays',
        rating: 9
    }

    public getTvShow(search: string | number) {
        return of(this.fakeShow);
    }
}