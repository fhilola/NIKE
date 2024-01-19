import { useEffect, useState } from "react";
import axios from '../../api/axios'
import { Product } from "../../types/ElementTypes.d";

const useFetch = (url: string)=>{
    const [data, setData] = useState<Product[] | []>([])
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<string | unknown>('')

    
}