import React, {useContext} from 'react'
import {CopyRightsContext} from '../App'

function Home() {

    const copy=useContext(CopyRightsContext)

    return (
        <div>
            A book is a medium for recording information in the form of writing or images, typically composed of many pages (made of papyrus, parchment, vellum, or paper) bound together and protected by a cover.[1] The technical term for this physical arrangement is codex (plural, codices). In the history of hand-held physical supports for extended written compositions or records, the codex replaces its immediate predecessor, the scroll. A single sheet in a codex is a leaf, and each side of a leaf is a page.

As an intellectual object, a book is prototypically a composition of such great length that it takes a considerable investment of time to compose and a still considerable, though not so extensive, investment of time to read. This sense of book has a restricted and an unrestricted sense. In the restricted sense, a book is a self-sufficient section or part of a longer composition, a usage that reflects the fact that, in antiquity, long works had to be written on several scrolls, and each scroll had to be identified by the book it contained. So, for instance, each part of Aristotle's Physics is called a book. In the unrestricted sense, a book is the compositional whole of which such sections, whether called books or chapters or parts, are parts.

The intellectual content in a physical book need not be a composition, nor even be called a book. Books can consist only of drawings, engravings, or photographs, or such things as crossword puzzles or cut-out dolls. In a physical book, the pages can be left blank or can feature an abstract set of lines as support for ongoing entries, e.g., an account book, an appointment book, an autograph book, a notebook, a diary, or a sketchbook. Some physical books are made with pages thick and sturdy enough to support other physical objects, like a scrapbook or photograph album. Books may be distributed in electronic form as e-books and other formats.

Although in ordinary academic parlance a monograph is understood to be a specialist academic work, rather than a reference work on a single scholarly subject, in library and information science monograph denotes more broadly any non-serial publication complete in one volume (book) or a finite number of volumes (even a novel like Proust's seven-volume In Search of Lost Time), in contrast to serial publications like a magazine, journal, or newspaper. An avid reader or collector of books is a bibliophile or colloquially, "bookworm". A shop where books are bought and sold is a bookshop or bookstore. Books are also sold elsewhere. Books can also be borrowed from libraries. Google has estimated that as of 2010, approximately 130,000,000 distinct titles had been published.[2] In some wealthier nations, the sale of printed books has decreased because of the increased usage of e-books.[3]
        
    <p>CopyRights Info : {copy}</p>

        </div>
    )
}

export default Home
