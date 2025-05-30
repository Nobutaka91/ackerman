import { TitleInput } from '../components/Toolbar';

const NoteDetail = () => {
  return (
    <div className="pb-40 pt-20">
      <div className="md:max-w-3xl lg:md-max-w-4xl mx-auto">
        <TitleInput initialData={{ id: 1, title: "test"}} onTitleChange={(val) => console.log(val)} />
      </div>
    </div>
  );
};

export default NoteDetail;
