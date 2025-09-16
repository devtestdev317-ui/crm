import Link from "next/link";

export const CustomLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
    return (
        <Link href={href} className="cursor-pointer">
            {children}
        </Link>
    );
};
