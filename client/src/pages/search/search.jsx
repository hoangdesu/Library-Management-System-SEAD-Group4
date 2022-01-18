import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getAllBooks } from "../../redux/reducers/book";

export default function Search() {

    const bookList = useSelector(state => state.book.books)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllBooks())
    })

    return (
        <div></div>
    )
}