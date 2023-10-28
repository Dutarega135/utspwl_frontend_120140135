import {
  List,
  ListItem,
  ListItemPrefix,
  Avatar,
  Card,
  Typography,
} from "@material-tailwind/react";

export function Cart() {
  return (
    <Card className="w-full">
      <List>
        <ListItem>
          <ListItemPrefix>
            <Avatar
              variant="circular"
              alt="produk 1"
              src="../src/assets/rekomendasi_1.png"
            />
          </ListItemPrefix>
          <div>
            <Typography variant="h6" color="blue-gray">
              Logitech G403 HERO Wired Gaming Mouse
            </Typography>
            <Typography variant="small" color="gray" className="font-normal">
              Rp 578999
            </Typography>
            <Typography variant="small" color="gray" className="font-normal">
              Amount: 10
            </Typography>
          </div>
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <Avatar
              variant="circular"
              alt="produk 2"
              src="../src/assets/rekomendasi_2.png"
            />
          </ListItemPrefix>
          <div>
            <Typography variant="h6" color="blue-gray">
              Logitech G403 HERO Wired Gaming Mouse
            </Typography>
            <Typography variant="small" color="gray" className="font-normal">
              Rp 1159000
            </Typography>
            <Typography variant="small" color="gray" className="font-normal">
              Amount: 10
            </Typography>
          </div>
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <Avatar
              variant="circular"
              alt="produk 3"
              src="../src/assets/rekomendasi_3.png"
            />
          </ListItemPrefix>
          <div>
            <Typography variant="h6" color="blue-gray">
              Logitech G403 HERO Wired Gaming Mouse
            </Typography>
            <Typography variant="small" color="gray" className="font-normal">
              Rp 578999
            </Typography>
            <Typography variant="small" color="gray" className="font-normal">
              Amount: 5
            </Typography>
          </div>
        </ListItem>
      </List>
    </Card>
  );
}
