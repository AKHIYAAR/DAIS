import React from 'react';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

// Rest of the imports...

// Same code as before...
const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));
  

export default function RecipeReviewCard() {
  // Same code as before...
  const [expanded, setExpanded] = React.useState({ card1: false, card2: false, card3: false });

  const handleExpandClick = (card) => {
    setExpanded((prevState) => ({
      ...prevState,
      [card]: !prevState[card],
    }));
  };


  return (
    <Grid container spacing={7} justifyContent="center" marginTop={"4%"}>
      <Grid item>
        <Card sx={{ maxWidth: 282, borderRadius: '5px' ,marginTop:"5%"}}>
          {/* Card 1 */}

          <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Boy of Escremii "
          subheader="Escremii Verse"
        />
        <CardMedia
          component="img"
          height="360"
          image="https://globalcomix.com/img/processed/comic-cover/20a5800d7f39ae4ad1f09f7f3fd0cdc3/25817_db589f0d5a90a9f9984c2c9e4f919a12_large.png"
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup
            of frozen peas along with the mussels, if you like.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <ExpandMore
            expand={expanded.card1}
            onClick={() => handleExpandClick('card1')}
            aria-expanded={expanded.card1}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded.card1} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Method:</Typography>
            <Typography paragraph>
              Instructions for preparing the third recipe.
            </Typography>          
          </CardContent>
        </Collapse>

          {/* Rest of the card content */}
        </Card>
      </Grid>


      <Grid item>
        <Card sx={{ maxWidth: 282, borderRadius: '5px' ,marginTop:"5%"}}>
          {/* Card 2 */}

          <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Another Recipe"
          subheader="Category"
        />
        <CardMedia
          component="img"
          height="120"
          image="https://example.com/another-image.jpg"
          alt="Dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
           This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup
            of frozen peas along with the mussels, if you like.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <ExpandMore
            expand={expanded.card2}
            onClick={() => handleExpandClick('card2')}
            aria-expanded={expanded.card2}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded.card2} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Method:</Typography>
            <Typography paragraph>Instructions for preparing the recipe.</Typography>
            {/* Additional content for the second card */}
          </CardContent>
        </Collapse>

          {/* Rest of the card content */}
        </Card>
      </Grid>


      <Grid item>
        <Card sx={{ maxWidth: 282, borderRadius: '5px' ,marginTop:"5%"}}>
          {/* Card 3 */}


          <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Third Recipe"
          subheader="Category"
        />
        <CardMedia
          component="img"
          height="120"
          image="https://example.com/third-image.jpg"
          alt="Dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup
            of frozen peas along with the mussels, if you like.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <ExpandMore
            expand={expanded.card3}
            onClick={() => handleExpandClick('card3')}
            aria-expanded={expanded.card3}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded.card3} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Method:</Typography>
            <Typography paragraph>Instructions for preparing the third recipe.</Typography>
            {/* Additional content for the third card */}
          </CardContent>
        </Collapse>

          {/* Rest of the card content */}
        </Card>
      </Grid>

      <Grid item>
        <Card sx={{ maxWidth: 282, borderRadius: '5px' ,marginTop:"5%"}}>
          {/* Card 4 */}

          <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Another Recipe"
          subheader="Category"
        />
        <CardMedia
          component="img"
          height="120"
          image="https://example.com/another-image.jpg"
          alt="Dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
           This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup
            of frozen peas along with the mussels, if you like.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <ExpandMore
            expand={expanded.card4}
            onClick={() => handleExpandClick('card4')}
            aria-expanded={expanded.card4}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded.card4} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Method:</Typography>
            <Typography paragraph>Instructions for preparing the recipe.</Typography>
            {/* Additional content for the second card */}
          </CardContent>
        </Collapse>

          {/* Rest of the card content */}
        </Card>
      </Grid>


      <Grid item>
        <Card sx={{ maxWidth: 282, borderRadius: '5px' ,marginTop:"5%"}}>
          {/* Card 5 */}


          <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Third Recipe"
          subheader="Category"
        />
        <CardMedia
          component="img"
          height="120"
          image="https://example.com/third-image.jpg"
          alt="Dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup
            of frozen peas along with the mussels, if you like.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <ExpandMore
            expand={expanded.card5}
            onClick={() => handleExpandClick('card5')}
            aria-expanded={expanded.card5}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded.card5} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Method:</Typography>
            <Typography paragraph>Instructions for preparing the third recipe.</Typography>
            {/* Additional content for the third card */}
          </CardContent>
        </Collapse>

          {/* Rest of the card content */}
        </Card>
      </Grid>

      <Grid item>
        <Card sx={{ maxWidth: 282, borderRadius: '5px' ,marginTop:"5%"}}>
          {/* Card 6 */}


          <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Third Recipe"
          subheader="Category"
        />
        <CardMedia
          component="img"
          height="120"
          image="https://example.com/third-image.jpg"
          alt="Dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup
            of frozen peas along with the mussels, if you like.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <ExpandMore
            expand={expanded.card6}
            onClick={() => handleExpandClick('card6')}
            aria-expanded={expanded.card6}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded.card6} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Method:</Typography>
            <Typography paragraph>Instructions for preparing the third recipe.</Typography>
            {/* Additional content for the third card */}
          </CardContent>
        </Collapse>

          {/* Rest of the card content */}
        </Card>
      </Grid>

      <Grid item>
        <Card sx={{ maxWidth: 282, borderRadius: '5px' ,marginTop:"5%"}}>
          {/* Card 7 */}


          <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Third Recipe"
          subheader="Category"
        />
        <CardMedia
          component="img"
          height="120"
          image="https://example.com/third-image.jpg"
          alt="Dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup
            of frozen peas along with the mussels, if you like.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <ExpandMore
            expand={expanded.card7}
            onClick={() => handleExpandClick('card7')}
            aria-expanded={expanded.card7}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded.card7} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Method:</Typography>
            <Typography paragraph>Instructions for preparing the third recipe.</Typography>
            {/* Additional content for the third card */}
          </CardContent>
        </Collapse>

          {/* Rest of the card content */}
        </Card>
      </Grid>

      <Grid item>
        <Card sx={{ maxWidth: 282, borderRadius: '5px' ,marginTop:"5%"}}>
          {/* Card 8 */}


          <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Third Recipe"
          subheader="Category"
        />
        <CardMedia
          component="img"
          height="120"
          image="https://example.com/third-image.jpg"
          alt="Dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup
            of frozen peas along with the mussels, if you like.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <ExpandMore
            expand={expanded.card8}
            onClick={() => handleExpandClick('card8')}
            aria-expanded={expanded.card8}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded.card8} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Method:</Typography>
            <Typography paragraph>Instructions for preparing the third recipe.</Typography>
            {/* Additional content for the third card */}
          </CardContent>
        </Collapse>

          {/* Rest of the card content */}
        </Card>
      </Grid>

      <Grid item>
        <Card sx={{ maxWidth: 282, borderRadius: '5px' ,marginTop:"5%"}}>
          {/* Card 9 */}


          <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Third Recipe"
          subheader="Category"
        />
        <CardMedia
          component="img"
          height="120"
          image="https://example.com/third-image.jpg"
          alt="Dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup
            of frozen peas along with the mussels, if you like.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <ExpandMore
            expand={expanded.card9}
            onClick={() => handleExpandClick('card9')}
            aria-expanded={expanded.card9}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded.card9} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Method:</Typography>
            <Typography paragraph>Instructions for preparing the third recipe.</Typography>
            {/* Additional content for the third card */}
          </CardContent>
        </Collapse>

          {/* Rest of the card content */}
        </Card>
      </Grid>

      <Grid item>
        <Card sx={{ maxWidth: 282, borderRadius: '5px' ,marginTop:"5%"}}>
          {/* Card 510*/}


          <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Third Recipe"
          subheader="Category"
        />
        <CardMedia
          component="img"
          height="120"
          image="https://example.com/third-image.jpg"
          alt="Dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup
            of frozen peas along with the mussels, if you like.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <ExpandMore
            expand={expanded.card10}
            onClick={() => handleExpandClick('card10')}
            aria-expanded={expanded.card10}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded.card10 } timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Method:</Typography>
            <Typography paragraph>Instructions for preparing the third recipe.</Typography>
            {/* Additional content for the third card */}
          </CardContent>
        </Collapse>

          {/* Rest of the card content */}
        </Card>
      </Grid>

      <Grid item>
        <Card sx={{ maxWidth: 282, borderRadius: '5px' ,marginTop:"5%"}}>
          {/* Card 11 */}


          <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Third Recipe"
          subheader="Category"
        />
        <CardMedia
          component="img"
          height="120"
          image="https://example.com/third-image.jpg"
          alt="Dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup
            of frozen peas along with the mussels, if you like.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <ExpandMore
            expand={expanded.card11}
            onClick={() => handleExpandClick('card11')}
            aria-expanded={expanded.card11}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded.card11} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Method:</Typography>
            <Typography paragraph>Instructions for preparing the third recipe.</Typography>
            {/* Additional content for the third card */}
          </CardContent>
        </Collapse>

          {/* Rest of the card content */}
        </Card>
      </Grid>

      <Grid item>
        <Card sx={{ maxWidth: 282, borderRadius: '5px' ,marginTop:"5%"}}>
          {/* Card 12 */}


          <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Third Recipe"
          subheader="Category"
        />
        <CardMedia
          component="img"
          height="120"
          image="https://example.com/third-image.jpg"
          alt="Dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup
            of frozen peas along with the mussels, if you like.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <ExpandMore
            expand={expanded.card12}
            onClick={() => handleExpandClick('card12')}
            aria-expanded={expanded.card12}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded.card12} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Method:</Typography>
            <Typography paragraph>Instructions for preparing the third recipe.</Typography>
            {/* Additional content for the third card */}
          </CardContent>
        </Collapse>

          {/* Rest of the card content */}
        </Card>
      </Grid>

      <Grid item>
        <Card sx={{ maxWidth: 282, borderRadius: '5px' ,marginTop:"5%"}}>
          {/* Card 13 */}


          <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Third Recipe"
          subheader="Category"
        />
        <CardMedia
          component="img"
          height="120"
          image="https://example.com/third-image.jpg"
          alt="Dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup
            of frozen peas along with the mussels, if you like.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <ExpandMore
            expand={expanded.card13}
            onClick={() => handleExpandClick('card13')}
            aria-expanded={expanded.card13}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded.card13} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Method:</Typography>
            <Typography paragraph>Instructions for preparing the third recipe.</Typography>
            {/* Additional content for the third card */}
          </CardContent>
        </Collapse>

          {/* Rest of the card content */}
        </Card>
      </Grid>

      <Grid item>
        <Card sx={{ maxWidth: 282, borderRadius: '5px' ,marginTop:"5%"}}>
          {/* Card 14 */}


          <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Third Recipe"
          subheader="Category"
        />
        <CardMedia
          component="img"
          height="120"
          image="https://example.com/third-image.jpg"
          alt="Dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup
            of frozen peas along with the mussels, if you like.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <ExpandMore
            expand={expanded.card14}
            onClick={() => handleExpandClick('card14')}
            aria-expanded={expanded.card14}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded.card14} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Method:</Typography>
            <Typography paragraph>Instructions for preparing the third recipe.</Typography>
            {/* Additional content for the third card */}
          </CardContent>
        </Collapse>

          {/* Rest of the card content */}
        </Card>
      </Grid>

      <Grid item>
        <Card sx={{ maxWidth: 282, borderRadius: '5px' ,marginTop:"5%"}}>
          {/* Card 15 */}


          <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Third Recipe"
          subheader="Category"
        />
        <CardMedia
          component="img"
          height="120"
          image="https://example.com/third-image.jpg"
          alt="Dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup
            of frozen peas along with the mussels, if you like.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <ExpandMore
            expand={expanded.card15}
            onClick={() => handleExpandClick('card15')}
            aria-expanded={expanded.card15}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded.card15} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Method:</Typography>
            <Typography paragraph>Instructions for preparing the third recipe.</Typography>
            {/* Additional content for the third card */}
          </CardContent>
        </Collapse>

          {/* Rest of the card content */}
        </Card>
      </Grid>

      <Grid item>
        <Card sx={{ maxWidth: 282, borderRadius: '5px' ,marginTop:"5%"}}>
          {/* Card 16 */}


          <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Third Recipe"
          subheader="Category"
        />
        <CardMedia
          component="img"
          height="120"
          image="https://example.com/third-image.jpg"
          alt="Dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup
            of frozen peas along with the mussels, if you like.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <ExpandMore
            expand={expanded.card16}
            onClick={() => handleExpandClick('card16')}
            aria-expanded={expanded.card16}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded.card16} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Method:</Typography>
            <Typography paragraph>Instructions for preparing the third recipe.</Typography>
            {/* Additional content for the third card */}
          </CardContent>
        </Collapse>

          {/* Rest of the card content */}
        </Card>
      </Grid>

      <Grid item>
        <Card sx={{ maxWidth: 282, borderRadius: '5px' ,marginTop:"5%"}}>
          {/* Card 17 */}


          <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Third Recipe"
          subheader="Category"
        />
        <CardMedia
          component="img"
          height="120"
          image="https://example.com/third-image.jpg"
          alt="Dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup
            of frozen peas along with the mussels, if you like.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <ExpandMore
            expand={expanded.card17}
            onClick={() => handleExpandClick('card17')}
            aria-expanded={expanded.card17}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded.card17} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Method:</Typography>
            <Typography paragraph>Instructions for preparing the third recipe.</Typography>
            {/* Additional content for the third card */}
          </CardContent>
        </Collapse>

          {/* Rest of the card content */}
        </Card>
      </Grid>

      <Grid item>
        <Card sx={{ maxWidth: 282, borderRadius: '5px' ,marginTop:"5%"}}>
          {/* Card 18 */}


          <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Third Recipe"
          subheader="Category"
        />
        <CardMedia
          component="img"
          height="120"
          image="https://example.com/third-image.jpg"
          alt="Dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup
            of frozen peas along with the mussels, if you like.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <ExpandMore
            expand={expanded.card18}
            onClick={() => handleExpandClick('card18')}
            aria-expanded={expanded.card18}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded.card18} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Method:</Typography>
            <Typography paragraph>Instructions for preparing the third recipe.</Typography>
            {/* Additional content for the third card */}
          </CardContent>
        </Collapse>

          {/* Rest of the card content */}
        </Card>
      </Grid>

      <Grid item>
        <Card sx={{ maxWidth: 282, borderRadius: '5px' ,marginTop:"5%"}}>
          {/* Card 19 */}


          <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Third Recipe"
          subheader="Category"
        />
        <CardMedia
          component="img"
          height="120"
          image="https://example.com/third-image.jpg"
          alt="Dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup
            of frozen peas along with the mussels, if you like.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <ExpandMore
            expand={expanded.card19}
            onClick={() => handleExpandClick('card19')}
            aria-expanded={expanded.card19}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded.card19} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Method:</Typography>
            <Typography paragraph>Instructions for preparing the third recipe.</Typography>
            {/* Additional content for the third card */}
          </CardContent>
        </Collapse>

          {/* Rest of the card content */}
        </Card>
      </Grid>

      <Grid item>
        <Card sx={{ maxWidth: 282, borderRadius: '5px' ,marginTop:"5%"}}>
          {/* Card 20 */}


          <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Third Recipe"
          subheader="Category"
        />
        <CardMedia
          component="img"
          height="120"
          image="https://example.com/third-image.jpg"
          alt="Dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup
            of frozen peas along with the mussels, if you like.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <ExpandMore
            expand={expanded.card20}
            onClick={() => handleExpandClick('card20')}
            aria-expanded={expanded.card20}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded.card20} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Method:</Typography>
            <Typography paragraph>Instructions for preparing the third recipe.</Typography>
            {/* Additional content for the third card */}
          </CardContent>
        </Collapse>

          {/* Rest of the card content */}
        </Card>
      </Grid>
    </Grid>

    
  );
}