import UploadPhotoForm from './imageUploader.js'

describe("UploadPhotoForm", () => {
  it('renders an upload form', () => {
    cy.mount(<UploadPhotoForm />);
    cy.get('[data-cy="imageForm"]').first().should('contain.text', "Select a photo:")
  })
})
