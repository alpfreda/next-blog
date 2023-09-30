import ContactForm from '@/components/contact/contact-form'
import { useContactForm } from '@/components/contact/contact-form-hook'
import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'

const mockedUseContactForm = useContactForm as jest.MockedFunction<typeof useContactForm>

jest.mock('../../../components/contact/contact-form-hook', () => ({
  useContactForm: jest.fn(),
}))

describe('ContactForm', () => {
  it('renders the ContactForm component with form elements', () => {
    mockedUseContactForm.mockReturnValue({
      isLoading: false,
      message: 'Test Message',
      setMessage: jest.fn(),
      onSubmit: jest.fn(),
    })

    render(<ContactForm />)

    const formElement = screen.getByRole('form')
    const labelElement = screen.getByText('Send Message')
    const textareaElement = screen.getByPlaceholderText('Write your message....')
    const submitButton = screen.getByText('Submit')

    expect(formElement).toBeInTheDocument()
    expect(labelElement).toBeInTheDocument()
    expect(textareaElement).toBeInTheDocument()
    expect(submitButton).toBeInTheDocument()
  })

  it('handles textarea input correctly', () => {
    // Mock the useContactForm hook return values
    const setMessage = jest.fn()
    mockedUseContactForm.mockReturnValue({
      isLoading: false,
      message: 'Test Message',
      setMessage,
      onSubmit: jest.fn(),
    })

    render(<ContactForm />)
    const textareaElement = screen.getByPlaceholderText('Write your message....')

    fireEvent.change(textareaElement, { target: { value: 'New Message' } })

    expect(setMessage).toHaveBeenCalledWith('New Message')
  })

  it('handles form submission correctly', () => {
    const onSubmit = jest.fn()
    mockedUseContactForm.mockReturnValue({
      isLoading: false,
      message: 'Test Message',
      setMessage: jest.fn(),
      onSubmit,
    })

    render(<ContactForm />)
    const submitButton = screen.getByText('Submit')

    fireEvent.click(submitButton)
  })

  it('disables the submit button when isLoading is true', () => {
    mockedUseContactForm.mockReturnValue({
      isLoading: true,
      message: 'Test Message',
      setMessage: jest.fn(),
      onSubmit: jest.fn(),
    })

    render(<ContactForm />)
    const submitButton = screen.getByText('Submit')

    expect(submitButton).toBeDisabled()
  })
})
