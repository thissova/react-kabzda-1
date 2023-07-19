import {create} from "react-test-renderer";
import Paginator from "./Paginator";

describe("Paginator test",() => {
    test("pages count is 11 but should be showed 12", () => {
        const component = create(<Paginator totalItemsCount={11} pageSize={1} portionSize={10}/>)
        const root = component.root
        // eslint-disable-next-line testing-library/await-async-query
        let items = root.findAllByType("span")
        expect(items.length).toBe(12)
    })
})