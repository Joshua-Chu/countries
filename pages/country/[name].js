import { useRouter } from "next/dist/client/router";
import Link from "next/link";

export default function Country() {
	const router = useRouter();
	const { name } = router.query;
	return (
		<>
			<Link href="/">
				<a>Back</a>
			</Link>
			<h1>Countries {name}</h1>
		</>
	);
}
