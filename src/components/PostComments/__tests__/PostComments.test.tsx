import { fireEvent, screen } from '@testing-library/react';
import { renderWithProvider} from '../../../utils/tests';
import Post from '../../Post';

describe('Teste para o componente PostComment', () => {
    test('Deve renderizar o componente corretamente', () => {
        renderWithProvider(<Post imageUrl="dummy.jpg">Test Post</Post>);
        expect(screen.getByTestId('post-text')).toBeInTheDocument();
    });
    test('Deve adicionar um novo comentário', () => {
        renderWithProvider(<Post imageUrl="dummy.jpg">Test Post</Post>);
        const input = screen.getByPlaceholderText('Escreva um comentário...');
        const button = screen.getByText('Comentar');

        fireEvent.change(input, { target: { value: 'Teste do primeiro comentário' } });
        fireEvent.click(button);
        expect(screen.getByText('Teste do primeiro comentário')).toBeInTheDocument();

        // Adicionando um segundo comentário
        fireEvent.change(input, { target: { value: 'Teste do segundo comentário' } });
        fireEvent.click(button);
        expect(screen.getByText('Teste do segundo comentário')).toBeInTheDocument();
    });
});