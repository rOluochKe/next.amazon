import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@material-ui/core'
import { Layout } from '../components/Layout'
import data from '../utils/data'

export default function Home() {
  return (
    <Layout>
      <h1>products</h1>
      <Grid container spacing={3}>
        {data.products.map((product) => (
          <Grid item md={4} key={product.name}>
            <Card>
              <CardActionArea>
                <CardMedia
                  component='img'
                  image={product.image}
                  title={product.title}
                ></CardMedia>
                <CardContent>
                  <Typography>{product.name}</Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Typography>${product.price}</Typography>
                <Button size='small' color='primary'>
                  Add to Cart
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Layout>
  )
}
