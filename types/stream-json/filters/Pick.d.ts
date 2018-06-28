import * as Chain from 'stream-chain';
import * as FilterBase from './FilterBase';

export = Pick;

declare class Pick extends FilterBase {
    constructor(options: FilterBase.FilterOptions);
}

declare namespace Pick {
    function make(options: FilterBase.FilterOptions): Pick;

    namespace make {
        type Constructor = Pick;
        const Constructor: typeof Pick;
    }

    function pick(options: FilterBase.FilterOptions): Pick;

    namespace pick {
        type Constructor = Pick;
        const Constructor: typeof Pick;
    }

    function withParser(options: FilterBase.FilterOptions): Chain;
}
