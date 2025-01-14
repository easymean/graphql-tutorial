import { getPostListQuery } from "@/app/lib/queries";

export default async function Page() {
  const { data } = await getPostListQuery();
  return <ul></ul>;
}
