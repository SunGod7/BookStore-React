import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { createBookSuccess, createBookFailure } from "../shared/AutoDismissAlert/messages";

import BookListModal from "./BookListModal";
import BookViewModal from "./BookViewModal";

export const bookToShow = (e) => {
    setShowBookViewModal(true)
    console.log(e.target.id)
    const bookIsbn = e.target.id
    setBookInViewModal(() => {
        const viewedBook = booksToView.filter(book => book.isbn === bookIsbn)
        console.log('book view modal being updated to:', viewedBook[0])
        return (
            viewedBook[0]
        )
    })
}

const CreateBook = (props) => {
    const {
        user, 
        show,
        booksToView, 
        handleClose, 
        // updateBook, 
        msgAlert, 
        // triggerRefresh
    } = props

    // const [showBookListModal, setShowBookListModal] = useState(false)
    // const [booksInModal, setBooksInModal] = useState(props.booksToView)

    const [showBookViewModal, setShowBookViewModal] = useState(false)
    const [bookInViewModal, setBookInViewModal] = useState({})

    // console.log('book being viewed:',bookInViewModal)

    // 'bookToShow' MOVED UP SO IT COULD BE EXPORTED
    // const bookToShow = (e) => {
    //     setShowBookViewModal(true)
    //     console.log(e.target.id)
    //     const bookIsbn = e.target.id
    //     setBookInViewModal(() => {
    //         const viewedBook = booksToView.filter(book => book.isbn === bookIsbn)
    //         console.log('book view modal being updated to:', viewedBook[0])
    //         return (
    //             viewedBook[0]
    //         )
    //     })
    // }

    

    return (
        <>
            <Modal
                size="lg" 
                show={show} 
                onHide={() => {
                        handleClose()
                    }
                }
                >
                <Modal.Header closeButton 
                style={{backgroundColor: 'rgb(177, 177, 177)'}}/>
                <Modal.Body 
                    style={{backgroundColor: 'whitesmoke'}}
                    >
                        <BookListModal
                            user={user}
                            msgAlert={msgAlert}
                            booksToView={booksToView}
                            heading="Any of these what you're looking for?"
                            setShowBookViewModal={bookToShow}
                        />
                </Modal.Body>
            </Modal>

            <Modal
                fullscreen={true} 
                show={showBookViewModal} 
                onHide={() => setShowBookViewModal(false)}
                >
                <Modal.Header 
                    closeButton
                    closeVariant="white"
                    style={{backgroundColor: 'black', color: 'white'}}
                    />
                <Modal.Body 
                    style={{backgroundColor: 'black', color: 'white'}}
                    >
                        <BookViewModal
                            bookInViewModal={bookInViewModal}
                        />
                </Modal.Body>
            </Modal>
        </>
    )
}

export default CreateBook