import InstagramImg from './InstagramImg';

export default function Instagram(): JSX.Element {
  return (
    <div className="max-w-5xl m-auto text-center py-24">
      <p className="text-2xl font-bold">Follow me on Instagram</p>
      <p className="pb-4">@Captur</p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 p-4">
        <InstagramImg image={1} />
        <InstagramImg image={2} />
        <InstagramImg image={3} />
        <InstagramImg image={4} />
        <InstagramImg image={5} />
        <InstagramImg image={6} />
      </div>
    </div>
  );
}
