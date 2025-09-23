// __tests__/ContactForm.test.tsx
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import ContactForm from "@/components/ContactForm";

global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve({ message: "Mensaje enviado" }),
  })
) as jest.Mock;

describe("ContactForm", () => {
  it("should render form inputs and submit successfully", async () => {
    render(<ContactForm />);

    // Inputs
    const nameInput = screen.getByPlaceholderText("Tu nombre");
    const emailInput = screen.getByPlaceholderText("Tu correo");
    const messageTextarea = screen.getByPlaceholderText("Tu mensaje");
    const submitButton = screen.getByRole("button", { name: /enviar mensaje/i });

    // Fill form
    fireEvent.change(nameInput, { target: { value: "Fabio" } });
    fireEvent.change(emailInput, { target: { value: "fabio@example.com" } });
    fireEvent.change(messageTextarea, { target: { value: "Hola, este es un mensaje." } });

    // Submit
    fireEvent.click(submitButton);

    // Assert that success message appears
    await waitFor(() =>
      expect(screen.getByText(/tu mensaje fue enviado correctamente/i)).toBeInTheDocument()
    );
  });
});
