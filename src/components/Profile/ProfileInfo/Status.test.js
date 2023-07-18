import React from "react";
import {create} from "react-test-renderer";
import ProfileStatus from "./Status";

describe("Status component", () => {
    test("Status from the props should be in the state", () => {
        const component = create(<ProfileStatus status="piy piy"/>)
        const instance = component.getInstance()
        expect(instance.state.status).toBe("piy piy")
    })
    test("after creation span should be displayed", () => {
        const component = create(<ProfileStatus status="piy piy"/>)
        const root = component.root
        // eslint-disable-next-line testing-library/await-async-query
        let span = root.findByType("span")
        expect(span.children.length).not.toBeNull()
    })
    test("after creation input shouldn't be displayed", () => {
        const component = create(<ProfileStatus status="piy piy"/>)
        const root = component.root
        expect(() => {
            // eslint-disable-next-line testing-library/await-async-query
            root.findByType("input")

        }).toThrow()
    })
    test("after creation span should be correct status", () => {
        const component = create(<ProfileStatus status="piy piy"/>)
        const root = component.root
        // eslint-disable-next-line testing-library/await-async-query
        let span = root.findByType("span")
        expect(span.children[0]).toBe('piy piy')
    })
    test("input should be displayed in editMode", () => {
        const component = create(<ProfileStatus status="piy piy"/>)
        const root = component.root
        // eslint-disable-next-line testing-library/await-async-query
        let span = root.findByType("span")
        span.props.onClick()
        // eslint-disable-next-line testing-library/await-async-query
        let input = root.findByType("input")
        expect(input.props.value).toBe('piy piy')
    })
    test("callback should be called", () => {
        const mockCallback = jest.fn()
        const component = create(<ProfileStatus status="piy piy" setStatus={mockCallback}/>)
        const instance = component.getInstance()
        instance.deactivateEditMode()
        expect(mockCallback.mock.calls.length).toBe(1)
    })
})