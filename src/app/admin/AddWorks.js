import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";

export default function AddWorks() {
  return (
    <Card
      className=" -screen flex  items-center"
      color="transparent"
      shadow={true}
    >
      <Typography variant="h4" color="blue-gray">
        Add Works
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Enter your details to register.
      </Typography>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="mb-4 flex flex-col gap-6">
          <Input size="lg" placeholder="Name of the organization" />
          <Input
            size="lg"
            placeholder="Type of the project ( Eg: Digital Marketing, SEO , etc)"
          />
          <Input size="lg" placeholder="Date " />
          <Input size="lg" placeholder="Description " />
          <Input size="lg" placeholder="URL of the project to showcase " />
          <Input type="file" label="Upload Image of the project"></Input>
        </div>
        <br />
        <Typography
          variant="small"
          color="gray"
          className="flex items-center font-normal"
        >
          It will be reflected in the website
          <a
            href="#"
            className="font-medium transition-colors hover:text-gray-900"
          >
            &nbsp;shortly
          </a>
        </Typography>

        <Button className="mt-6" fullWidth>
          Register
        </Button>
      </form>
    </Card>
  );
}
