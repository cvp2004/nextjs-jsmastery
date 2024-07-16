"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";

const PromptCard = ({ data, handleTagClick }) => {

    console.log(data);

    return (
        <div className="prompt_card">
            <div className="flex justify-between items-start gap-5">
                <div className="flex-1 justify-start items-center gap-3 cursor-pointer">
                    <Image
                        src={data.creator.image}
                        alt="user_image"
                        width={40}
                        height={40}
                        className="rounded-full object-contain"
                    />
                </div>
            </div>
        </div>
    )
}
export default PromptCard