'use client'

import { animate } from "framer-motion";
import { useEffect, useRef } from "react";

interface iFramerNum {
    from: number,
    to: number,
}

export default function FramerNum({ from, to }: iFramerNum) {
    const nodeRef = useRef()

    useEffect(() => {
        const node = nodeRef.current

        const controls = animate(from, to, {
            duration: .5,
            onUpdate(value) {
                // @ts-ignore
                node.textContent = value.toFixed(0)
            }
        })

        return () => controls.stop()
    }, [from, to])

    return (
        // @ts-ignore
        <span ref={nodeRef} />
    )
}