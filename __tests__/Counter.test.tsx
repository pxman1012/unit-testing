// Counter.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import Counter from '@/app/counter';

describe('Counter Component', () => {

    // 1. Test render của các thành phần
    it('renders with initial count', () => {
        render(<Counter initialCount={5} />);
        expect(screen.getByText('Counter: 5')).toBeInTheDocument();
    });

    // 2. Test event handling - tăng giá trị bộ đếm khi nhấn nút Increment
    it('increments the count by 1 when Increment button is clicked', () => {
        render(<Counter initialCount={0} />);
        const incrementButton = screen.getByText('Increment');
        fireEvent.click(incrementButton);
        expect(screen.getByText('Counter: 1')).toBeInTheDocument();
    });

    // 3. Test event handling - đặt lại bộ đếm khi nhấn nút Reset
    it('resets the count to 0 when Reset button is clicked', () => {
        render(<Counter initialCount={10} />);
        const resetButton = screen.getByText('Reset');
        fireEvent.click(resetButton);
        expect(screen.getByText('Counter: 0')).toBeInTheDocument();
    });

    // // 4. Test props - đảm bảo bộ đếm khởi tạo đúng khi nhận props initialCount
    // it('uses the initialCount prop as the starting count', () => {
    //     render(<Counter initialCount={3} />);
    //     expect(screen.getByText('Counter: 3')).toBeInTheDocument();
    // });

    // // 5. Test các nhánh điều kiện - không có nhánh điều kiện phức tạp ở đây, nhưng có thể test thêm trường hợp đặc biệt
    // it('starts with 0 if no initialCount is provided', () => {
    //     render(<Counter />);
    //     expect(screen.getByText('Counter: 0')).toBeInTheDocument();
    // });

    // // 6. Test snapshot - kiểm tra xem giao diện của component có thay đổi không
    // it('matches snapshot', () => {
    //     const { asFragment } = render(<Counter initialCount={0} />);
    //     expect(asFragment()).toMatchSnapshot();
    // });
});
