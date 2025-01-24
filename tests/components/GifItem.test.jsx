import { render } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe('GifItem test', () => {
    const url = 'https://localhost/image.jpg';
    const title = 'Mi titulo';
    test('should match with snapshot', () => {
        const { container } = render(<GifItem url={url} title={title} />);
        expect(container).toMatchSnapshot();
    });
});