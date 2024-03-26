<x-layout>
    <form action="/store" method="POST" enctype="multipart/form-data" style="width: 50vw; margin: auto; background-color: #f7faff; padding: 20px; border-radius: 10px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">
        @csrf
        <fieldset style="border: 2px solid #007bff; padding: 20px; border-radius: 10px; background-color: #fff;">
            <legend style="font-size: 1.5rem; font-weight: bold; margin-bottom: 10px; color: #007bff;">Product Form</legend>
            <div style="margin-bottom: 15px;">
                <label for="name" class="form-label" style="width: 15%; padding-right: 2%; color: #007bff;">Name</label>
                <input type="text" class="form-control" id="name" name="name" style="width: 80%; padding: 5px; color: #007bff; border-color: #007bff;">
            </div>
            <div style="display: flex; margin-bottom: 15px;">
                <div style="width: 50%; padding-right: 5%;">
                    <label for="pricing" class="form-label" style="width: 20%; padding-right: 2%; color: #007bff;">Price</label>
                    <input type="number" class="form-control" id="pricing" name="pricing" min="1" style="width: 80%; padding: 5px; color: #007bff; border-color: #007bff;">
                </div>
                <div style="width: 50%;">
                    <label for="promotion" class="form-label" style="width: 20%; padding-right: 2%; color: #007bff;">Promotion</label>
                    <input type="number" class="form-control" id="promotion" name="promotion" style="width: 80%; padding: 5px; color: #007bff; border-color: #007bff;">
                </div>
            </div>

            <div style="margin-bottom: 15px;">
                <label class="form-label" for="category" style="width: 15%; padding-right: 2%; color: #007bff;">Category</label>
                <select class="form-select" id="category" name="category" style="width: 25%; padding: 5px; color: #007bff; border-color: #007bff;">
                    @foreach ( $categories as $category )
                        <option value="{{$category->id}}">{{$category->name}}</option>
                    @endforeach
                </select>
            </div>
            <div style="margin-bottom: 15px;">
                <label for="image" class="form-label" style="width: 15%; padding-right: 2%; color: #007bff;">Image</label>
                <input type="file" class="form-control" id="image" name="image" style="padding: 5px; color: #007bff; border-color: #007bff;">
            </div>
            <div style="margin-bottom: 15px;">
                <label for="description" class="form-label" style="width: 15%; padding-right: 2%; color: #007bff;">Description</label>
                <textarea id="description" name="description" style="width: 80%; padding: 5px; color: #007bff; border-color: #007bff;"></textarea>
            </div>

            <div style="display: flex; align-items: center; justify-content: flex-end;">
                <a href="{{route("home")}}" style="padding: 5px 8px; text-decoration: none; background-color: #007bff; color: white; border-radius: 5px; margin-right: 10px;">Cancel</a>
                <button type="submit" style="padding: 7px 10px; text-decoration: none; background-color: #28a745; color: white; border: none; border-radius: 5px;">Create</button>
            </div>
        </fieldset>
    </form>
</x-layout>
