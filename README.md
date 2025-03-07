# @balvorn/reactmodal

Simple react modal package.

## Prerequisites

- **Node.js**: >= 16.0.0
- **Package Manager**: npm
- **Recommended Editor**: VS Code

## Installation

```sh
npm install @balvorn/reactmodal
```

## Usage

You can find an example of usage in the modal-example directory.
```tsx
import React from 'react';
import Modal, { openModal, closeModal } from '@balvorn/reactmodal';

export default function App() {
  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      <Modal backDropClose={true} onClose={() => console.log('Modal closed')}>
        <h2>My Modal Content</h2>
        <button onClick={closeModal}>Close</button>
      </Modal>
    </div>
  );
}
```

## Props

| Prop            | Type          | Default  | Description |
|----------------|--------------|----------|-------------|
| `children`     | `ReactNode`   | `null`   | Content inside the modal |
| `onClose`      | `() => void`  | `() => {}` | Callback when modal closes |
| `backDropClose` | `boolean`    | `false`  | Allows closing modal by clicking outside |
| `showCloseButton` | `boolean` | `true`  | Show or hide the close button |
| `buttonText`   | `string`      | `"Close"` | Text for the close button |

## Functions

### `openModal()`
Opens the modal.

### `closeModal()`
Closes the modal.

## License

ISC

## Author

Leo Marcou

