import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  Submit,
} from '@redwoodjs/forms'

const formatDatetime = (value) => {
  if (value) {
    return value.replace(/:\d{2}\.\d{3}\w/, '')
  }
}

const FlashcardForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.flashcard?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="front"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Front
        </Label>
        <TextField
          name="front"
          defaultValue={props.flashcard?.front}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="front" className="rw-field-error" />

        <Label
          name="back"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Back
        </Label>
        <TextField
          name="back"
          defaultValue={props.flashcard?.back}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="back" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit
            disabled={props.loading}
            className="rw-button rw-button-blue"
          >
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default FlashcardForm
